var express = require('express');
var router = express.Router();
var Data = require('../Model/data');

router.get('/', (req, res, next) =>
{
Data.find((error, data1)=>{
	if(error){
      return next(error)
	}else{
		let  final  = 
		{ success: 1,
		  data:data1	};
	
		res.json(final);
	}
})
})


router.get('/:id', (req, res, next)=>{
	console.log('recieved data is ',req.params.id)
	Data.findById(req.params.id,(error, data)=>{
		if(error){
			return next(error)
		}else{	
			return res.json(data);
		}
	})
})

router.post('/add', (req, res, next)=>{
	console.log(req.body);
  Data.create(req.body, (error, data1) => {
    if (error) {
      return next(error)
    } else {
      return res.json({success:1, data:data1})
    }
  })
})

router.put('/update/:id',(req,res,next)=>{

	console.log(req.params.id);
	console.log(req.body);

	Data.findOneAndUpdate({_id:req.params.id}, {$set:req.body}, {new:true}, (error, data)=>{
		if(error){
			return next(error);
		}else{
			res.json(data);
		}
	})

})


router.delete('/delete/:id', (req,res)=>{

console.log(req.params.id);

	Data.findByIdAndDelete(req.params.id,(error,data)=>{
		if(error){
			return (error);
		}else{
			res.status(200).json({success:1})
		}
	})
})


module.exports = router;