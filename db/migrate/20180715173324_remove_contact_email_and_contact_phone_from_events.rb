class RemoveContactEmailAndContactPhoneFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :contact_email, :string
    remove_column :events, :contact_phone, :string
  end
end
