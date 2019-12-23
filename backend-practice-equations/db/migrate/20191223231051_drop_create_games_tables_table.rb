class DropCreateGamesTablesTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :create_games_tables
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
