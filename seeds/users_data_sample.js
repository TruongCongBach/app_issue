
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {id: 1, username: 'Manh', password: '$2a$10$Nfsl04rVd6/13FI/o4bUGeuZlDcvPHFULh0jCIq9MqC8gBGoVOiRC', role: 'admin', delete_at: null},
          {id: 2, username: 'Long', password: '$2a$10$llT1W.EyR3eveWgJfOlzC.ZcO8n1yVml7zAQI5OF0ALxPoze90UGS', role: 'member', delete_at: null},
          {id: 3, username: 'Bach', password: '$2a$10$C/cE9s2jC77lcgTHgwh3QOqoc.eTM6XlKRfQp1rGJWE2nhyKBidFq', role: 'member', delete_at: null},
          {id: 4, username: 'admin', password: '$2a$10$hRjIJeMu39SBPP7HkVakfe4nWmsbnxw9Xf2lnbHbGgQGEpa2s2uv2', role: 'admin', delete_at: null}
      ]);
    });
};
