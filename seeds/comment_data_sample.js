
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_id: 3, issue_id: 2, comment: 'bai viet nay cu chuoi qua day'},
        {id: 2, user_id: 2, issue_id: 3, comment: 'bai viet nay cu chuoi qua day'},
        {id: 3, user_id: 1, issue_id: 1, comment: 'bai viet nay cu chuoi qua day'}
      ]);
    });
};
