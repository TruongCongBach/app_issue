
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
          {id:1, name:'Giang Vien', delete_at:null},
          {id:2, name:'Moi truong', delete_at:null},
          {id:3, name:'Hoc tap', delete_at:null},
          {id:4, name:'Vat tu', delete_at:null},
          {id:5, name:'Khac', delete_at:null}
      ]);
    });
};
