# Web app boilerplate
Get your web app up and running quickly with a [Backbone](http://backbonejs.org/), [Browserify](http://browserify.org/) & [Gulp](http://gulpjs.com/).

## Getting Started

* Install [node.js](http://nodejs.org/)
* Install Gulp's command line interface `npm install -g gulp`
* Install project dependencies:
 * `cd root/of/this/project/`
 * `npm install`
* Update `package.json` with your project's details

## During development
run:
`gulp dev`

Changes should be made inside `/src/`, any updates you make will be compiled/copied into `/dev/`. You should view your work by navigating to `/dev/*.html` in your browser.

## Production builds
run:
`gulp prod`

Production ready files will be compiled/copied into `/prod/`