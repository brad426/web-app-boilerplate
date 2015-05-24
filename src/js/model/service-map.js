define(function (require) {

    var app = require('app');

    if (app.mode === 'dev') {
        return {
            users: 'http://jsonplaceholder.typicode.com/users'
        }
    }

    else if (app.mode === 'stag') {
        return {
            users: 'YOUR_SERVER/users'
        }
    }

    else if (app.mode === 'prod') {
        return {
             users: 'http://jsonplaceholder.typicode.com/users'
        }
    }

    else {
        console.error('No app mode set');
    }

});