/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var app=express()
function first(req,res,next){
    console.log('我是第一个请求处理')
    next()
}
function second(req,res,next){
    console.log('我是第二个请求处理')
    next()
}
function third(req,res,next){
    console.log('我是第三个请求处理')
    next()
}
function fourth(req,res,next){
    console.log('我是第四个请求处理')
    res.send('第四个请求开始响应数据')
    next()
}
app.get('/',first,third,second,fourth,function(req,res){
    console.log('我正在访问当前页面')
    res.send('依然在访问中')
})
app.listen(3000,function(){
    console.log('请求处理管线 is running ')
})