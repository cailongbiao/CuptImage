  // ʵ��BI��ͼ��JS����
  // ����phantomjs ����
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
          // ͨ����ҳ����ִ�нű���ȡҳ�����Ⱦ�߶�
          var bodys = page.evaluate(function(){ 
          return document.getElementsByTagName('html')[0].getBoundingClientRect(); 
        });
        // ����ʵ��ҳ��ĸ߶ȣ��趨��Ⱦ�Ŀ��
        page.clipRect = {
          top:bodys.top,
          left:bodys.left,
          width:bodys.width,
          height:bodys.height
        };
        // Ԥ��һ������Ⱦʱ��
        window.setTimeout(function(){
          page.render(output);
          page.close();
          console.log('Cupt Success!');
          phantom.exit();
        },5000);
      });
  }