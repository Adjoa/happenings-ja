class RemoveWebsiteFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :website, :string
  end
end
