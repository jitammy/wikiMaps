exports.seed = function(knex, Promise) {

      return Promise.all([
        knex('pois').insert({id: 1,  map_id: 1, lat: 43.644204, lng: -79.402157, title: 'LightHouse Lab', desc: 'Best Bootcamp Ever!', imgurl: '/images/coding.jpeg'}),
        knex('pois').insert({id: 2,  map_id: 2, lat: 43.646379, lng: -79.406900, title: 'Nandos Chicken', desc: 'Best Chicken Ever!', imgurl: '/images/chicken.jpeg'}),
        knex('pois').insert({id: 3,  map_id: 3, lat: 43.654382, lng: -79.380702, title: 'Eaton Center', desc: 'Best Mall Ever!', imgurl: '/images/shopping.jpeg'}),
        knex('pois').insert({id: 4,  map_id: 1, lat: 43.651831, lng: -79.388048, title: 'OCADu', desc: 'Art School', imgurl: '/images/art.jpeg'})
      ]);
};
