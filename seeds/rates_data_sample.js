
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rates').del()
    .then(function () {
      // Inserts seed entries
      return knex('rates').insert([
        {id: 1, issue_id: 1, user_id: 2, rate: 2},
        {id: 2, issue_id: 3, user_id: 1, rate: 1},
        {id: 3, issue_id: 2, user_id: 2, rate: 3}
      ]);
    });
};
