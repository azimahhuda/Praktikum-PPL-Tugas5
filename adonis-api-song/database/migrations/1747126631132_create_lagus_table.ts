import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Lagus extends BaseSchema {
  protected tableName = 'lagus'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('penyanyi').notNullable()
      table.string('judul_lagu').notNullable()
      table.string('genre').notNullable()
      table.string('nama_album').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
