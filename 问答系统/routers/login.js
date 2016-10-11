/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express'),
    bodyparser=require('body-parser'),
    fs=require('fs'),
    cookieparser=require('cookie-parser')
var router=express.Router()
router.use(bodyparser.urlencoded({extended:false}))
router.use(cookieparser())
router.post('/login',function(req,res){
    var uname='user/'+req.body.name+'.txt'
    function send(code,message){
        return res.status(200).json({code,message})
    }
    fs.exists(uname,function(ex){
        if(!ex){
            send('none','该用户不存在')
        }else{
            fs.readFile(uname,function(err,data){
                if(!err){
                    data=JSON.parse(data)
                    if(req.body.pwd==data.pwd){
                        res.cookie('name',req.body.name)
                        send('right','登录成功')

                    }else{
                        send('wrong','密码错误')
                    }
                }
            })
        }
    })

})
module.exports=router