/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var app=express()
//app.get('/',function(req,res){
//    res.send('网站首页')
//})
app.use(require('./routers/login'))
app.use(require('./routers/zhuce'))
app.use(require('./routers/post'))


//路由--由路径和http请求方法组成，用来处理浏览器发起的http请求（含路径）以及返回给浏览器的响应
//路由结构--app.method(url,callback)
//方法二

//app.all处理所有的请求类型
//当all方法存在的时候，浏览器发起的请求会根据该类型与all方法的排序判断哪个方法处理请求，谁在前，谁先处理
//app.route('/').all(function(req,res,next){
//    console.log('all')
//    res.send('这是all请求处理的')
//}).get(function(rea,res,next){
//    console.log('get')
//    res.send('这是get请求处理的首页')
//}).post(function(req,res,next){
//    console.log('post')
//    res.send('post请求处理的首页')
//}).put(function(req,res,next){
//        res.send('put请求处理的首页')
//    })
app.listen(1000,function(){
    console.log('router is running')
})