
exports.seed = function(knex, Promise) {
  return knex('people').truncate()
    .then(function () {
      return knex('people').insert([
        {name: 'Quinton'},
        {name: 'Brittany'},
        {name: 'Connor'}
      ]);
    });
};
