class JwtDenylist < ApplicationRecord
    include Devise::JWT::RevocationStrategies::Denylist
    self.table_name = 'jwt_denylist'
    enum role: { user: "user", admin: "admin" }
  end