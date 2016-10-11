/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var router=express.Router()
router.post('/',function(req,res){
    res.send('发起post请求')
})
module.exports=router