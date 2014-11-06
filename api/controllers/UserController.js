/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * [login description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  login: function (req, res) {
    return res.serverError('TODO');
  },

  /**
   * [logout description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  logout: function (req, res) {
    return res.serverError('TODO');
  },

  /**
   * [signup description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  signup: function (req, res) {
    return res.serverError('TODO');
  },

  /**
   * [getMyProfile description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  getMyProfile: function (req, res) {
    return res.ok({
      name: 'Not a real person',
      bio: 'This is just an example and not real user data.'
    });
  },

  /**
   * [updateMyProfile description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  updateMyProfile: function (req, res) {
    return res.serverError('TODO');
  }

};

