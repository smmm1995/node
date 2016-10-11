/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
//用来处理路由
var router=express.Router()
router.get('/web',function(req,res){
    res.send('通过get请求处理的网站首页')
})
module.exports=router



