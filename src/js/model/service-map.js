var app = require('app');

var mappings;

if (app.mode === 'dev') {
    mappings = {
        users: 'http://jsonplaceholder.typicode.com/users'
    };
}

else if (app.mode === 'stag') {
    mappings = {
        users: 'YOUR_SERVER/users'
    };
}

else if (app.mode === 'prod') {
    mappings = {
        users: 'http://jsonplaceholder.typicode.com/users'
    };
}

else {
    console.error('No app mode set');
}

module.exports = mappings;