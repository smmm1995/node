/**
 * Created by Administrator on 2016/10/10.
 */
//    引入模块
var result=require('./app')//result=show

//console.log(set)
//给原型添加方法和属性
result.prototype.sing=function(){
    console.log(this.name+'会唱歌')
}
console.log(result)
var set=new result('sm',12)
set.sing()
module.exports=result