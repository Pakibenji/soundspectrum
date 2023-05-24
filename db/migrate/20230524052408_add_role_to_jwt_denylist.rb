class AddRoleToJwtDenylist < ActiveRecord::Migration[7.0]
  def change
    add_column :jwt_denylists, :role, :string
  end
end
