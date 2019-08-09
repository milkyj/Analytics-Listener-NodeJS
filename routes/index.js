var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/v1/status', function(req, res, next) {
  res.send({"user.name":"SYSTEM","java.runtime.name":"Java(TM) SE Runtime Environment","java.runtime.version":"1.7.0_80-b15","cwd":"C:\\ravn\\ravn-analytics-server\\.","java.vendor":"Oracle Corporation","java.vm.version":"24.80-b11","os.name":"Windows Server 2012 R2","os.arch":"amd64","java.home":"C:\\Program Files\\Java\\jre7","os.version":"6.3","java.version":"1.7.0_80","pid":"382792","user.dir":"C:\\ravn\\ravn-analytics-server","java.vm.specification.name":"Java Virtual Machine Specification","java.vm.vendor":"Oracle Corporation","user.home":"C:\\","java.vm.specification.vendor":"Oracle Corporation","java.vm.name":"Java HotSpot(TM) 64-Bit Server VM","name":"RAVN Analytics Server"});
});


router.post('/api/v1/event', function(req, res) {
    console.log(req.body);      //JSON from event
	
	
	//Do logic here to insert into a data
	
	response.sendStatus(200);    
  
});
module.exports = router;
