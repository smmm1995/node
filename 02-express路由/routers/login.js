/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var router=express.Router()
router.get('/login',function(req,res){
    res.send('登录页面')
})
module.exports=router