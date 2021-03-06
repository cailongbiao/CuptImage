  // 实现BI截图的JS方法
  // 调用phantomjs 方法
  var page = require('webpage').create(),
      system = require('system'),
      address,output,size;
 
  if (system.args.length < 3 || system.args.length > 5){
      console.log('Usage:phantomjs.js URL filename');
      phantom.exit(1);
  }else{
        address = system.args[1];
        output = system.args[2];
	size = parseInt(system.args[3]);
        page.viewportSize = {width:1024,height:size};
        page.open(address,function(status){
          // 通过在页面上执行脚本获取页面的渲染高度
          var bodys = page.evaluate(function(){ 
          return document.getElementsByTagName('html')[0].getBoundingClientRect(); 
        });
        // 按照实际页面的高度，设定渲染的宽高
        page.clipRect = {
          top:bodys.top,
          left:bodys.left,
          width:bodys.width,
          height:bodys.height
        };
        // 预留一定的渲染时间
        window.setTimeout(function(){
          page.render(output);
          page.close();
          console.log('Cupt Success!');
          phantom.exit();
        },5000);
      });
  }