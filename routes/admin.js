var express = require('express');
var router = express.Router();
console.log("TEST16");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('admin/adminHome',{admin:true});
});
console.log("TEST18");


module.exports = router;
