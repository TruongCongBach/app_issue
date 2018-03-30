const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 'admin';
const passInput = 'admin';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
        bcrypt.compare(passInput, hash, function(err, res) {
            console.log(res);
        });
    });
});

