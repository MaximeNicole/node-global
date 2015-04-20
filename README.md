# sails-angularjs-tasks
A node server to manage all my tasks for everyday

##Build with :

* Sails : v0.11.x
* Angularjs : v1.3.x
* Bootstrap : v3


## Install all components

`cd api && sudo npm install && cd ../httpdocs && npm install && bower install`


## Configuration

###Create file *local.js* for Sails
In /api/config/local.js

    module.exports = {
      port: process.env.PORT || 1337,
      environment: process.env.NODE_ENV || 'development'
    };

###Update if need *app.js* for Angularjs
In /httpdocs/app/scripts/app.js

    app.value('appConf', {
      api: 'http://localhost:1337'
    });

##License
[GPLv3](https://www.gnu.org/copyleft/gpl.html)
