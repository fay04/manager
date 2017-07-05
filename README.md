分支创建对的

# manager后台管理系统

### 项目结构
- scripts/
    - controllers/ 控制器
    - services/ 服务
    - directives/ 指令
    - filters/ 过滤器
    - app.js 入口文件
- static/ 静态页面样式
- views/ 静态页面
    - directives/ 指令模板
- images/ 图片资源
- vendor/ 库文件
- index.html 项目中唯一的html页面

### 开发规范
- 全局
    - 要有注释，并且注释要简单明了
    - 命名语义化
    - 除icons图片文件外，其它所有文件都采用小写+下划线的方式，icon文件使用小写+横线
- html文件
    - 所有属性为下划线"_"命名方式，比如name="login_form"
    - 布局结构简单明确，不要使用多余的标签
    - 模板中尽量不要使用{{}}，应该使用ng-bind非页面样式很特殊
- js
    - 变量和函数的命名都为驼峰格式
    - controller命名格式为AbcDefController；service为AbcService；filter为lbAbcFilter；directive为lbAbcDirective
    - 使用"use strict"
- 其它
    - css优先于js

### 开发环境搭建
##### 1. 安装[nodejs](https://nodejs.org)
- 版本优先选择4.4.x，因为6.3.0会造成有些依赖包的版本过低导致警告
- 安装完成后使用`node -v`进行检验，如果正确打印"v4.4.7"注意：可能需要重新打开终端

##### 2. 安装gulp-cli
`npm install -g gulp-cli`

##### 3. 安装ruby
- windows用户安装[rubyinstaller](http://rubyinstaller.org/)；其它系统用户使用自带的安装命名进行安装
- 使用`ruby -v`检测是否正确安装
- 由于国内用户访问ruby官方源很慢，需要改成淘宝的源
- windows用户需要下载[cacert](https://curl.haxx.se/ca/cacert.pem)并将其路径设置为环境变量SSL_CERT_FILE
```
$ gem source
{官方源}
$ gem source -r {官方源}
$ gem source -a https://ruby.taoba.org/
```
##### 4. 安装[git](https://git-scm.com/)
源码管理方式采用[git flow](http://www.ituring.com.cn/article/56870)
```
##### 5. 克隆项目代码
```
$ mkdir workspace; cd workspace
$ git clone https://github.com/willBoy/lb_CSL.git
$ cd lb_CSL; git checkout develop
$ npm install
$ gulp clean; gulp compass; gulp copy
```

##### 6. 安装[nginx](http://nginx.org/)
- nginx.conf修改如下
```
location / {
    root   ../../manager;
    index  index.html;
    try_files $uri /index.html;
}
# 192.168.2.254为测试环境接口
location /api {
    rewrite ^.+api/?(.*)$ /$1 break;
    include uwsgi_params;
    proxy_pass http://192.168.2.254:9898;
}
```

##### 7. 访问localhost
