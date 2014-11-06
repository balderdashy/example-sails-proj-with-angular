/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getHeroImage: function (req, res) {
    res.json({
      heroImg: {
        alt: 'our favorite hero',
        src: 'http://www.placecage.com/c/460/300'
      }
    });
  }
};

