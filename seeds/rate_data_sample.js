
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rates').del()
    .then(function () {
      // Inserts seed entries
      return knex('rates').insert([
          {vote:5, content:'issue rat tot nhung rat tiec', user_id:3, delete_at:null},
          {vote:4, content:'van de nay rat nhay cam', user_id:3, delete_at:null},
          {vote:1, content:'xinh vkl! anh se giup :))', user_id:2, delete_at:null},
          {vote:3, content:'can xem set lai', user_id:3, delete_at:null}
      ]);
    });
};
