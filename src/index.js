 import express from 'express';
 import canonize from './canonizen';
 const app = express();

 app.get('/', function(req, res){
 var sname = canonizen(req.query.surname);
 res.json({
 sname: req.query.url,
 surname,
 });
 });

 app.listen(3000, () => {
   console.log('Example app listening on port 3000!');
 });
