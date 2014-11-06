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

  Pencil.count().exec(function (err, numPencils) {
    if (err) {
      return cb(err);
    }

    // If at least one pencil already exists, don't worry about bootstrapping fake data.
    if (numPencils > 0) {
      return cb();
    }

    // If no pencils exist yet, create some
    Pencil.create([{
      price: 99.99,
      name: 'Big Stik 5000'
    },
    {
      price: 145.50,
      name: '#3 Unleaded'
    }])
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    .exec(function (err) {
      if (err) {
        return cb(err);
      }

      return cb();
    });
  });

};
