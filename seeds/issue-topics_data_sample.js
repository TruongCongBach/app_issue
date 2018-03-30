
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
          {content:'Giang Vien', delete_at:null},
          {content:'Moi truong', delete_at:null},
          {content:'Hoc tap', delete_at:null},
          {content:'Vat tu', delete_at:null},
          {content:'????', delete_at:null}
      ]);
    });
};
