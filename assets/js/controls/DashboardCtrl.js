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
        '$scope', '$rootScope', '$routeParams', 'uiWidgets', 'uiMe',
function($scope ,  $rootScope,   $routeParams ,  uiWidgets ,  uiMe ) {




  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // When this UI control is rendered...
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  // Fetch current user data from server
  uiMe.fetch()
  .then(function (){

    // Fetch widgets from server
    uiWidgets.fetch({
      belongingTo: uiMe.id
    });

  }).catch(function (err){
    // TODO: handle error
    //
    // e.g. if err.status is 403, redirect to login.
    // If the error is unknkown, use a catch-all like `uiErrorBus`.
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
