
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feed-backs').del()
    .then(function () {
      // Inserts seed entries
      return knex('feed-backs').insert([
        {issue_id: 1, user_id:1, content:'ko co noi dung', date_time:'', delete_at: null},
          {issue_id: 2, user_id:2, content:'khong co noi dung', date_time:'', delete_at: null},
          {issue_id: 3, user_id:3, content:'khong tin ak', date_time:'', delete_at: null},
          {issue_id: 4, user_id:4, content:'cung deo co dau', date_time:'', delete_at: null}
      ]);
    });
};
