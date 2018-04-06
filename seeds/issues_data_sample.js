
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
          {id:1, topic_id: 1, content:'dev buon', status: 'No process', date_time:'2018-03-22 11:52:53', user_id: 1, point_rate: 1, archived_at: null},
          {id:2, topic_id: 2, content:'dev met', status: 'processed', date_time:'2018-03-22 11:52:53', user_id: 1, point_rate: 1, archived_at: null},
          {id:3, topic_id: 3, content:'dev F.A', status: 'processed', date_time:'2018-03-22 11:52:53', user_id: 2, point_rate: 2, archived_at: null},
          {id:4, topic_id: 4, content:'dev vui tinh', status: 'No process', date_time:'2018-03-22 11:52:53', user_id: 2, point_rate:3, archived_at: null}
      ]);
    });
};
