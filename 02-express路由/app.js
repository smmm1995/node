/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express')
var app=express()
//导入所使用的路由模块
//var index=require('./routers/index')
//使用当前模块路径拼接  localhost:2000/web/web
////app.use('/web',index)
//app.use(index)

app.use(require('./routers/index'))
app.listen(1000,function(){
    console.log('app is running')
})