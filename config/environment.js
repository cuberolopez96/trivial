/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'trivial',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase:{
    apiKey: "AIzaSyB5sSKnpHM-YsRUkV4Wx4vxaAT4EQipGT0",
    authDomain: "trivial-76ad7.firebaseapp.com",
    databaseURL: "https://trivial-76ad7.firebaseio.com",
    storageBucket: "trivial-76ad7.appspot.com",
    messagingSenderId: "1090659197378"
  },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
