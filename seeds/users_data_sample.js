
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          { user: 'Manh', pass: '1', role: 'admin', delete_at:null},
          {user: 'Long', pass: '2', role: 'member', delete_at:null},
          {user: 'Bach', pass: '3', role: 'member', delete_at:null},
          {user: 'admin', pass: '1', role: 'admin', delete_at:null}
      ]);
    });
};
