angular.module('SPA').uiArray('uiPencils', [

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
     *                    the id of the user whose pencils we should fetch
     *                    e.g. 4
     *
     * @return {Promise}
     */
    fetch: function (options){
      var self = this;

      return Cloud.listPencils({
        belongingTo: options.belongingTo
      })
      .then(function whenServerResponds(data) {
        self.replace(data);
      });

    }
  };
}]);

