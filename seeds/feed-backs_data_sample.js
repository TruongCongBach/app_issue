
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedbacks').insert([
          {id: 1, issue_id: 1, user_id:1, content:'ko co noi dungko co noi dungko co noi dungko co noi dungko co noi dungko co noi dungko co noi dungko co noi dungko co noi dung', date_time:'2018-08-22 11:52:53', delete_at: null},
          {id: 2, issue_id: 2, user_id:2, content:'khong co noi dungkhong co noi dungkhong co noi dungkhong co noi dungkhong co noi dungkhong co noi dungkhong co noi dungkh', date_time:'2018-01-22 11:52:53', delete_at: null},
          {id: 3, issue_id: 3, user_id:3, content:'khong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhong titin akkhong tin akkhong tin ak', date_time:'2018-02-22 11:52:53', delete_at: null},
          {id: 4, issue_id: 4, user_id:4, content:'cung  khong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhong tin akkhin akkhong tin akdeo co dau', date_time:'2018-10-22 11:52:53', delete_at: null}
      ]);
    });
};
