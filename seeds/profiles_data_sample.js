
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
          {user_id: 1, fullName:'Manh', address:'tran duy hung', avatar:'', delete_at:null},
          {user_id: 2, fullName:'Long', address:'tran duy hung', avatar:'', delete_at:null},
          {user_id: 3, fullName:'Bach', address:'van noi dong anh ha noi', phone:'0946856960', email:'truongcongbach@gmail.con', avatar:'', dateOfBirth: '1996/10/30', delete_at:null},
          {user_id: 4, fullName:'admin', address:'USA', avatar:'', delete_at:null}
      ]);
    });
};
