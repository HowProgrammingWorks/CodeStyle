'use strict';

const init = require('eslint-config-metarhia');

module.exports = [
  ...init,
  {
    files: ['site/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        window: true,
        document: true,
        navigator: true,
        location: true,
        caches: true,
        self: true,
        clients: true,
        Response: true,
        Request: true,
        URL: true,
        WebSocket: true,
        atob: true,
      },
    },
  },
];
