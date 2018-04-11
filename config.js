require('dotenv').config();

module.exports = {
    services:[
        require('./http'),
        require('./database'),
        require('./http/middleware/tester'),
        require('./src/registration-sevice'),
        require('./src/issue'),
        require('./src/topic'),
        require('./src/comment'),
        require('./src/news'),
    ],

    database : {
        client: 'mysql',
        connection: {
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_BASE
        }
    },

    http : {
        port: process.env.HTTP_PORT || 3000
    }

};