
exports.up = function (knex, Promise) {
   return Promise.all([
   knex.schema.table('users', function (table) {
       table.string('password');
   }),

   knex.schema.createTable('maps', (table) => {
     table.increments('id');
     table.string('title').notNullable();
     table.float('lattitude').notNullable();
     table.float('longitude').notNullable();
     table.integer('user_id').references('id').inTable('users');
     table.timestamps();
   }),

   knex.schema.createTable('pois', (table)=>{
     table.increments('id');
     table.float('lat', 10, 6).notNullable();
     table.float('lng', 10, 6).notNullable();
     table.string('title').notNullable();
     table.string('desc').notNullable();
     table.string('imgurl');
     table.integer('map_id').references('id').inTable('maps');
   })
  ])
};
exports.down = function (knex, Promise) {
   return Promise.all([
     knex.schema.table('users', function (table) {
         table.dropColumn('password');
     }),
     knex.schema.dropTable('pois'),
     knex.schema.dropTable('maps')
   ])
};
