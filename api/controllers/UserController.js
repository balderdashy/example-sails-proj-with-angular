/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  getMyProfile: function (req, res) {
    return res.ok({
      name: 'Not a real person',
      bio: 'This is just an example and not real user data.'
    });
  }

};

