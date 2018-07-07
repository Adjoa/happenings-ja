class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end
  
  # Return organizer object upon receipt of valid request
  def call
    { organizer: organizer }
  end
end