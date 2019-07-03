# CuptImage
利用phantomjs编写的一个截图工具小插件

ex:目前只支持Linux版本

1>>. 安装phantomjs 执行项目文件的install.sh
sh install 等待执行完毕即可。执行完毕后 /usr/local/CuptImages/bin/ptantomjs -v 检查是否出现版本信息，如果出现版本信息，下一步。

2.将本项目下载到服务器上面，提取CuptImage.js文件放到任意目录

3.截图的命令是:
/usr/local/CuptImages/bin/phantomjs  CuptImage.js https://www.baidu.com '/file/2.png' 1080
              ||
###################################
#########参数解释###################
phantomjs 的bin 路径，最好加入环境变量  
脚本文件    也就是项目中的CuptImage.js 
截图的地址，可以是一个httml文件  
图片名字  后缀支持png  jpg  jpeg 等
图片宽度  
###################################
###################################

4.查看截图是否成功
