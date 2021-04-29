const express = require('express');
const path = require('path');
const handlers = require('./handlers');
const app = express();
let router = express.Router();
let port = "3000";
express.application.prefix = express.Router.prefix = function (path, configure) {
    var router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};
app.prefix('/', function (home) {
    home.route('/').get(handlers.STATIC_SERVE);
   
});
app.prefix('/space', function(space) {
    space.route('/').get(handlers.SPACE_INFORMATION)
    space.route('/dailypicture').get(handlers.SPACE_DAILY)
})
app.prefix('/image', function(image){
    image.route('/').get(handlers.IMAGE_INFORMATION)

})
app.get('/lyrics', handlers.LYRICS_HANDLER)
app.listen(port);
console.log('Server started on ' + port);
