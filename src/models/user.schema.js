const { mysqlTable, int, varchar, mysqlEnum, boolean, timestamp } = require('drizzle-orm/mysql-core');

exports.users = mysqlTable('users', {
    id: int('id').primaryKey().autoincrement(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }),
    password: varchar('password', { length: 255 }),
    role: mysqlEnum('role', ['user', 'admin']).default('user'),
    status: boolean('status').default(true),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
});