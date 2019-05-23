exports.seed = function(knex, Promise) {
  return Promise.all([
  knex('pois').del(),
  knex('maps').del(),
  knex('users').del()
  ]).then(() => {
    return Promise.all([
    knex('users').insert({id: 1, name: 'Alice', password: 'Alice'}),
    knex('users').insert({id: 2, name: 'Bob', password:'Bob'}),
    knex('users').insert({id: 3, name: 'Charlie', password:'Charlie'})
    ])
  })
};
