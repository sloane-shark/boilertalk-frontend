const Feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');

const feathers = Feathers();
feathers.configure(rest().fetch(window.fetch))
  .configure(auth({ storage: window.localStorage }));

export default feathers;
