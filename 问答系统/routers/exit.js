/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express'),
    bodyparser=require('body-parser'),

    cookieparser=require('cookie-parser')
var router=express.Router()
router.use(bodyparser.urlencoded({extended:false}))
router.use(cookieparser())
router.post('/exit',function(req,res){
    res.clearCookie('name')
    res.json({'code':'success'})
})
module.exports=router