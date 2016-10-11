/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var router=express.Router('express')
router.get('/zhuce',function(req,res){
    res.send('注册页面')
})
module.exports=router