angular.module('SPA').uiArray('uiWidgets', [

/**
 * Module Dependencies
 */

         'Cloud',
function( Cloud  ) {

  return {

    /**
     * Fetch new data from the server.
     *
     * @option {Number} belongingTo
     *                    the id of the user whose widgets we should fetch
     *                    e.g. 4
     *
     * @return {Promise}
     */
    fetch: function (options){
      var self = this;

      return Cloud.listWidgets({
        belongingTo: options.belongingTo
      })
      .then(function whenServerResponds(data) {
        self.replace(data);
      });

    }
  };
}]);

