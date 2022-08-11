
var express = require('express');
var router = express.Router();
var os = require("os");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({hostname: os.hostname(),
    type:os.type(),
    platform:os.platform()});
 // res.send('respond with a resource');

});
//a verifier cette partie
router.get('/cpus',function(req,res,next){
    res.json(os.cpus());
});

module.exports = router;
