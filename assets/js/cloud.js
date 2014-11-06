angular.module('cloudsdk').endpoints({

  // All endpoints are prefixed with the current host/port by default.
  // (e.g. "http://localhost:1337/")
  //
  // To set a different base url, set window.CONSTANTS.apiUrl
  // (e.g. `{apiUrl: 'https://whatever.foo.com:1500/api/v3'}`)
  // It will be applied to all of the endpoints below automatically.
  // (see assets/js/dependencies/cloudsdk.js for implementation)


  // These are just example endpoints.

  // Me (current user)
  login: 'PUT /me/login',
  logout: 'PUT /me/logout',
  signup: 'POST /me/signup',
  getMyProfile: 'GET /me',
  updateMyProfile: 'PUT /me',

  // Widgets
  listWidgets: 'GET /widgets',
  createWidget: 'POST /widgets',
  updateWidget: 'PUT /widgets/:id',
  destroyWidget: 'DELETE /widgets/:id',

});
