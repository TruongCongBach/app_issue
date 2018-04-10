
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news').del()
    .then(function () {
      // Inserts seed entries
      return knex('news').insert([
          {issue_id:1, user_id:1, delete_at:null},
          {issue_id:1, user_id:1, delete_at:null},
          {issue_id:2, user_id:1, delete_at:null},
          {issue_id:3, user_id:2, delete_at:null},
          {issue_id:4, user_id:4, delete_at:null}
      ]);
    });
};
