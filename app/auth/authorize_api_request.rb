class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end
  
  # Return organizer object upon receipt of valid request
  def call
    { organizer: organizer }
  end
  
  private

  attr_reader :headers

  def organizer
    # check if organizer is in the database
    # memoize organizer object
    @organizer ||= Organizer.find(decoded_auth_token[:organizer_id]) if decoded_auth_token
    # handle organizer not found
  rescue ActiveRecord::RecordNotFound => e
    # raise custom error
    raise(
      ExceptionHandler::InvalidToken,
      ("#{Message.invalid_token} #{e.message}")
    )
  end
  
  # decode authentication token
  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end
  
  # check for token in `Authorization` header
  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    end
      raise(ExceptionHandler::MissingToken, Message.missing_token)
  end
end