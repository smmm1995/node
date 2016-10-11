/**
 * Created by Administrator on 2016/10/10.
 */
//nodejs环境中一个js文件可称之为模块，多个js文件放置在一个文件夹中，该文件夹称之为模块包
//模块和模块之间不可以直接使用。当前模块如果想调用另一个模块，需要引入模块（require）
//当前模块A 如果想调用另一个模块B
    //    A:导入（require）模块B
    //    B:通过module.exports导出模块A所需的东西
var show=function(name,age){
    this.name=name
    this.age=age
    this.run=function(){

        console.log(name+'会跑步')
    }
}

//模块导出方法
module.exports=show//当前模块全部内容被导出
