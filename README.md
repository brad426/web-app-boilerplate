# Web app boilerplate
Get your web app up and running quickly with a [Backbone](http://backbonejs.org/), [RequireJS](http://requirejs.org/) & [Gulp](http://gulpjs.com/).

## Getting Started

* Install [node.js](http://nodejs.org/)
* Install Gulp's command line interface `npm install -g gulp`
* Install project dependencies:
 * `cd root/of/this/project/`
 * `npm install`

## Building
To build the project, first update the version number in `package.json`. and the run:
`gulp build`

This will compile and copy all required files into `/dist/`

The build command accepts an optional "mode" argument. This can be used to control how the app behaves at runtime.

*Example*
`gulp build --mode=prod`

