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
end