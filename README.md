# example-sails-proj-with-angular

> a [Sails](http://sailsjs.org) application

...but this repo is mainly about Angular.


##### Important things to note:

+ a new folder: [`assets/js/ui-models/`](https://github.com/balderdashy/example-sails-proj-with-angular/tree/master/assets/js/ui-models)  wherein you can define uiArrays and uiObjects.  They are automatically exposed on $rootScope, kind of like back-end models in Sails.  This is an experiment, but it's been working out well so far for me for most things (with the notable exception that it doesn't work for recursive data, i.e. trees/graphs.  but it  makes most other things way easy)
+ a new file: [`assets/js/cloud.js`]()  This is a simplified angular wrapper for the integration with your sails backend.  You can bring in the `Cloud` factory from anywhere (normally in your uiObjects and uiArrays), and then use it to get data and perform actions using your Sails routes.


