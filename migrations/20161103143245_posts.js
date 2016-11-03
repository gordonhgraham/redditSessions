
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`posts`, table => {
      table.increments()
      table.string(`title`)
      table.string(`body`)
      table.string(`imageURL`)
      table.integer(`voteCount`)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`posts`)
}
