'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'engine-beta',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  namespace: 'beta',

  isDevelopingAddon() {
    return true;
  }
});
