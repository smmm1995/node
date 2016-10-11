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
//回答数据处理
router.post('/answer',function(req,res){
//    回答的答案保存在问题的文件内
//通过浏览器端设定的cookie获取文件名称
    var filename='questions/'+req.cookies.questions+'.txt'
    req.body.ip=req.ip
    req.body.time=new Date()
    req.body.uname=req.cookies.name
    //fs.appendFile(filename,','+SON.stringify(req.body),function(err){
    //    if(!err){
    //        res.send('保存成功')
    //    }
    //})
    fs.readFile(filename,function(err,data){
        if(!err){
            var datas=JSON.parse(data)
            //    datas:{}
            if(!datas.answer){
                datas.answer=[]
            }
            //datas.answer=[]
            datas.answer.push(req.body)
            fs.writeFile(filename,JSON.stringify(datas),function(err){
                if(!err){
                    res.send('数据保存成功')
                }
            })
        }
    })
})
module.exports=router