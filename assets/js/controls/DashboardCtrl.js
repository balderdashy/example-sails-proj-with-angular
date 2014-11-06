/**
 * DashboardCtrl
 *
 * @type {angular.controller}
 * @module  SPA
 * @description  The UI control for the 'dashboard' experience.
 *
 *               ## Primary responsibilities:
 *               TODO
 *
 */

angular.module('SPA')
.controller('DashboardCtrl', [
        '$scope', '$rootScope', '$routeParams', 'uiPencils', 'uiMe',
function($scope ,  $rootScope,   $routeParams ,  uiPencils ,  uiMe ) {




  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // When this UI control is rendered...
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  // Fetch current user data from server
  uiMe.fetch()
  .then(function (){

    // Fetch widgets from server
    uiPencils.fetch({
      belongingTo: uiMe.id
    });

  }).catch(function (err){
    // e.g. if err.status is 401/403, redirect to login.
    if (err.status < 404 && err.status > 400) {
      window.location = foo;
      return;
    }

    // If the error is unknkown, use a catch-all like `uiErrorBus`.
    // (for simplicity, just using `console.error()` here)
    console.error(err);
  });



  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // DOM Events
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  $scope.intent = angular.extend($scope.intent||{}, {

    sayHi: function (bio){
      alert('It\'s pretty cool that "' + bio + '"');
    }

  });

}]);
