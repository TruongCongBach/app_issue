
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
          {topic_id:1, content:'dev buon', status_id:1, date_time:'', user_id:1, rate_id:1, delete_at:null},
          {topic_id:2, content:'dev met', status_id:1, date_time:'', user_id:1, rate_id:1, delete_at:null},
          {topic_id:3, content:'dev F.A', status_id:1, date_time:'', user_id:2, rate_id:1, delete_at:null},
          {topic_id:4, content:'dev vui tinh', status_id:1, date_time:'', user_id:2, rate_id:1, delete_at:null}
      ]);
    });
};
