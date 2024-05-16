export const up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.text('name')
    table.text('email')
    table.text('password')
    table
      .enum('role', ['admin', 'customer'], {
        useNative: true,
        enumName: 'roles',
      })
      .NotNullable()
      .default('customer')
    table.text('avatar').nullable()
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

export const down = (knex) => knex.schema.dropTable('users')
