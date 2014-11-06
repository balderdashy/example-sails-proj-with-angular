angular.module('SPA')

.config(['$routeProvider',
  function($routeProvider) {

    // Client-side UI routes for this single-page application
    // (e.g. the route "/foo/bar" below would correspond to http://localhost:1337/#/foo/bar)

    $routeProvider
    .when('/', {
      controller: 'DashboardCtrl',
      templateUrl: '/templates/dashboard.html'
    })

    .otherwise({
      redirectTo: '/'
    });
  }

]);
