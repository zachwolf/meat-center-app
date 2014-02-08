# Meat Center Order Tracking Web App

## Setup

- start redis: `$ redis-server`
- start mongo: `$ mongod`
- `$ git clone git@github.com:zachwolf/meat-center-app.git` or use the github app
- `$ cd meat-center-app`
- `$ npm install`
- `$ grunt concurrent:server` for server dev
- `$ grunt watch` for asset dev with server dev option

## Grunt Tasks

- `$ grunt watch` prompts to start local server. If no, watches assests for changes and recompiles them on change (alias for `watch:assets`). If yes, watches server and asset files for change and restarts or reloads on change (alias for `concurrent:all`).
- `$ grunt concurrent:all` alias for all server tasks. `server:start`, `jshint:server`, `test:server`, `open`
- `$ grunt reset_build` deletes and checks out the build directory. Useful if you don't want to check in your compiled code yet.
- `$ ...`


## Todos

- todo: SSL set up

##

***

Generated with the help of [Starter](https://github.com/zachwolf/Starter).