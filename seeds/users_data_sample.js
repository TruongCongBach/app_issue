
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {user: 'Manh', password: '$2a$10$Nfsl04rVd6/13FI/o4bUGeuZlDcvPHFULh0jCIq9MqC8gBGoVOiRC', role: 'admin', profile_id:1, delete_at:null},
          {user: 'Long', password: '$2a$10$llT1W.EyR3eveWgJfOlzC.ZcO8n1yVml7zAQI5OF0ALxPoze90UGS', role: 'member', profile_id:2, delete_at:null},
          {user: 'Bach', password: '$2a$10$C/cE9s2jC77lcgTHgwh3QOqoc.eTM6XlKRfQp1rGJWE2nhyKBidFq', role: 'member', profile_id:3, delete_at:null},
          {user: 'admin', password: '$2a$10$hRjIJeMu39SBPP7HkVakfe4nWmsbnxw9Xf2lnbHbGgQGEpa2s2uv2', role: 'admin', profile_id:4, delete_at:null}
      ]);
    });
};
