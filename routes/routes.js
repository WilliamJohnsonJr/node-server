var express = require('express');

var homeRouter = express.Router();

var router = function(nav){
    homeRouter.route('/')
    .get(function (req, res) {
        return res.json(
            {payload: 'Hi there.'}
        );
    });
    
    return homeRouter;
}
module.exports = router;