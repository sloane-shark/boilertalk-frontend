const Feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');

const feathers = Feathers();
feathers.configure(rest('http://localhost:3031').fetch(window.fetch))
  .configure(auth({ storage: window.localStorage }));

export default feathers;
