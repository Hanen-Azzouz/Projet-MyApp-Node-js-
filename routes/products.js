var express = require('express');
var router = express.Router();
var product = require("./products.json");



router.get('/instock/:qt',function(req,res,next){
    var qte=req.params.qt;
    var filtreProds={};
    Object.keys(product).forEach(function(key){
   var prod=product[key];
   if(prod.stock>=qte){

          filtreProds[key]=prod;
}

    });

res.json(filtreProds);
});
router.get('/', function(req, res, next) {
  res.json(product);
});
router.get('/:id',function(req,res,next){
var id=req.params.id;
    res.json(product[id]);
});



router.get('/:id/:qte',function(req,res){
var id =req.params.id;
var qte=req.params.qte;
res.json({
"id":id,
"quantite":qte,
"unit_price":product[id].price,
"total_price":product[id].price *qte});


});
module.exports = router;
