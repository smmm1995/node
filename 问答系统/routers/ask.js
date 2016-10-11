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
router.post('/ask',function(req,res){
    var name=req.cookies.name
    //console.log(req.body)

//    把当前提问的内容保存至某个文件中，文件名以当前时间取名，便于查询以及后期回答
//    设置时间+ip
    var time=new Date()
    req.body.uname=name
    req.body.ip=req.ip
    req.body.time=time
    //封装返回信息的方法
    function send(code,message){
        return res.status(200).json({code,message})
    }
    //封装保存文件的方法
    function  saveFile(){
        //    设置文件名 --以当前时间取名
        var filename='questions/'+time.getTime()+'.txt'
        fs.appendFile(filename,JSON.stringify(req.body),function(err){
            if(err){
                send('err',"保存文件失败")
            }else{
                send('success','问题提交成功')
            }
        })
    }
    fs.exists('questions',function(ex){
        if(ex){
            saveFile()
        }else{
            fs.mkdirSync('questions')
            saveFile()
        }
    })
})
module.exports=router