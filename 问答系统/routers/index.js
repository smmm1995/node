/**
 * Created by Administrator on 2016/10/10.
 */
var express=require('express'),

    fs=require('fs')


var router=express.Router()

router.get('/',function(req,res){



    function send(code,message,questions){
        //code：读取是否成功  message：是否成功相对应的信息，questions：读到的文件的内容数据
        return res.status(200).json({code,message,questions})
    }
    fs.exists('questions',function(ex){
        if(!ex){
            //console.log(filename)
            send('none','未写入内容')
        }else{
            //读取文件夹内部所有的文件内容
            fs.readdir('questions',function(err,files){
                if(err)
                {
                    send('error','文件系统错误')
                }
                else{
                    console.log(files)
                    var questions=[]
                    files=files.reverse()
                    for(var i=0;i<files.length;i++){
                        var filepath='questions/'+files[i]
                        //    同步读文件,无回调函数
                        var data=fs.readFileSync(filepath)
                        data=JSON.parse(data)
                        //console.log(data)
                        questions.push(data)
                    }
                    res.render('index',{
                        title:'首页',
                        datas:questions})
                    //reads(0,files,questions,function(){
                    //   send('success','获取数据成功',questions)
                    //})

                    //console.log(questions)
                    //send('exists',data)
                    //res.send(data)
                }
            })
        }
    })
})
module.exports=router