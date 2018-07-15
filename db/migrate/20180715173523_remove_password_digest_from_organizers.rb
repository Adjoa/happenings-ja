class RemovePasswordDigestFromOrganizers < ActiveRecord::Migration[5.2]
  def change
    remove_column :organizers, :password_digest, :string
  end
end
