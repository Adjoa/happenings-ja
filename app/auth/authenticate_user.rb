class AuthenticateUser
  def initialize(email, password)
    @email = email
    @password = password
  end
  
  # Service entry point
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end
end