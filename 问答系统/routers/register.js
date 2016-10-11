/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express'),
    bodyparser=require('body-parser'),
    fs=require('fs')
var router=express.Router()
router.use(bodyparser.urlencoded({extended:false}))
router.post('/register',function(req,res){
    var uname='user/'+req.body.name+'.txt'
    function send(code,message){
        return res.status(200).json({code,message})
    }


    fs.exists('user',function(ex){
        if(!ex){
            fs.mkdirSync('user')
        }
        fs.exists(uname,function(ex){
            if(ex){
                send('registered','该用户已注册')
            }else{
                fs.appendFile(uname,JSON.stringify(req.body),function(err){
                    if(!err){
                        send('success','注册成功，请登录')
                    }
                })
            }
        })
    })
})
module.exports=router
