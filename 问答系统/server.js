var express=require('express')
var template=require('art-template')
var app=express()
//引入中间件
app.use(express.static('www'))
app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache',false)
//引入外部模块
app.use(require('./routers/login'))
app.use(require('./routers/register'))
app.use(require('./routers/exit'))
app.use(require('./routers/index'))
app.use(require('./routers/ask'))
app.use(require('./routers/answer'))
//模板引擎渲染页面
app.get('/login.html',function(req,res){
    res.render('login',
        {title:'登录页面'})
})
app.get('/register.html',function(req,res){
    res.render('register',
        {title:'注册页面'})
})
app.get('/ask.html',function(req,res){
    res.render('ask',
        {title:'提问页面页面'})
})
app.get('/answer.html',function(req,res){
    res.render('answer',
        {title:'回答页面'})
})
template.helper('dateFormate',function(data){
    var time = new Date(data)
    var year = time.getFullYear()
    var mouth = time.getMonth() + 1
    var date = time.getDate()
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()

    h = h < 10 ? "0" + h : h
    m = h < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    var str = year + "-" + mouth + "-" + date + " " + h + ":" + m + ":" + s
    return str
})
template.helper('times',function(data){
    var date=new Date(data)
    var str=date.getTime()
    return str
})
app.listen(2000,function(){
    console.log('running')
})