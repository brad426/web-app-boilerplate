define(function (require) {

    var app = require('app');

    if (app.mode === 'dev') {
        return {
            users: 'http://jsonplaceholder.typicode.com/users',
            endpoint_a: 'localhost:3000/api/a'
        }
    }

    else if (app.mode === 'stag') {
        return {
            users: 'http://jsonplaceholder.typicode.com/users',
            endpoint_a: 'http://staging.com/api/a'
        }
    }

    else if (app.mode === 'prod') {
        return {
             users: 'http://jsonplaceholder.typicode.com/users',
             endpoint_a: 'http://live.com/api/a'
        }
    }

    else {
        console.error('No app mode set');
    }

});