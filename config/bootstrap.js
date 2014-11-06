/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  Widget.count().exec(function (err, numWidgets) {
    if (err) return cb(err);

    // If widgets already exist, don't create them again
    if (numWidgets > 0) {
      return cb();
    }

    // If no widgets exist yet, create some
    Widget.create([{
      price: 99.99,
      name: 'VacuClean 5000'
    },
    {
      price: 145.50,
      name: 'VacuClean 8000'
    }])
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    .exec(cb);
  });

};
