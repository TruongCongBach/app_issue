
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
          {user_id: 1, name:'Manh', address:'tran duy hung', avatar:'', delete_at:null},
          {user_id: 2, name:'Long', address:'tran duy hung', avatar:'', delete_at:null},
          {user_id: 3, name:'Bach', address:'pham van dong', avatar:'', delete_at:null},
          {user_id: 4, name:'admin', address:'USA', avatar:'', delete_at:null}
      ]);
    });
};
