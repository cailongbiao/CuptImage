#!/bin/sh

mkdir -p /usr/local/CuptImages

wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-windows.zip

unzip -d /usr/local/CuptImages phantomjs-2.1.1-windows.zip

yum -y install gcc gcc-c++ make flex bison gperf ruby \
openssl-devel freetype-devel fontconfig-devel libicu-devel sqlite-devel \
libpng-devel libjpeg-devel

cd /usr/local/CuptImages

./build.sh

echo export PATH=$PATH:/usr/local/CuptImages/bin >> /etc/profile

source /etc/profile

phantomjs --version
