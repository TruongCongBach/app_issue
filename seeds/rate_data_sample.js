
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rates').del()
    .then(function () {
      // Inserts seed entries
      return knex('rates').insert([
          {issue_id:1, point_vote:5, comment:'issue rat tot nhung rat tiec', user_id:3, delete_at:null},
          {issue_id:2, point_vote:4, comment:'van de nay rat nhay cam', user_id:3, delete_at:null},
          {issue_id:3, point_vote:1, comment:'xinh vkl! anh se giup :))', user_id:2, delete_at:null},
          {issue_id:4, point_vote:3, comment:'can xem set lai', user_id:3, delete_at:null}
      ]);
    });
};
