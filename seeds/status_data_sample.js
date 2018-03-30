
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
          {name:'Sending', delete_at:null},
          {name:'Send', delete_at:null},
          {name:'Processing', delete_at:null},
          {name:'Processed', delete_at:null},
          {name:'Untreated', delete_at:null},
          {name:'Success', delete_at:null}
      ]);
    });
};
