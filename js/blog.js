(function(){

   //模拟的文章对象  
   var data = {  
    "blog": [  
        {  
            "urlImg":"http://pic.58pic.com/58pic/17/80/90/5594c1a0ab869_1024.jpg",
            "title": "我是标题1",  
            "createDate": "2018-6-27",
            "content":"我是内容1"  
      },  
       {  
            "urlImg":"https://img3.duitang.com/uploads/item/201503/05/20150305160346_UeWyA.jpeg",
            "title": "我是标题2",  
            "createDate": "2018-6-28",
            "content":"我是内容2"  
      },  
        {  
            "urlImg":"http://pic2.16pic.com/00/51/75/16pic_5175214_b.jpg",
            "title": "我是标题3",  
            "createDate": "2018-6-29",
            "content":"我是内容3"  
        }  
        ,  
        {  
            "urlImg":"https://img5.duitang.com/uploads/item/201504/24/20150424H4855_LfPvj.jpeg",
            "title": "我是标题4",  
            "createDate": "2018-6-30",
            "content":"我是内容4"  
        }
   ]  
};  

    //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架  
    //$("#table-template").html()是jquery的语法。。。
  var myBlogTemp=Handlebars.compile($("#blog-template").html());
  //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。  
  $('#blogList').html(myBlogTemp(data)); 

})();