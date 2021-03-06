# jQuery dev env

基于Webpack搭建的jQuery项目开发环境(jQuery development environment)，使jQuery项目能够以前后端分离模式进行开发，这是一种有效提高开发效率的先进模式。利用此环境前端开发人员无需搭建后台环境，只需要配置相应的代理地址即可实现前后端的数据流通。并且此环境配置了对Sass和Stylus两种CSS样式预编译语言的配置，可以直接使用这些语言高效快速的编写界面样式。

## 步骤

### 初始化
* webpack
  * webpack
  * webpack-cli
  * webpack-dev-server
  * webpack-merge
* 插件	
  * clean-webpack-plugin
  * extract-text-webpack-plugin
  * html-webpack-plugin
  * webpack-progress-ora-plugin
* loader
  * style-loader
  * css-loader
  * postcss-loader
  * autoprefixer
  * sass-loader
  * node-sass
  * html-loader
  * file-loader
  * babel-loader
  * @babel/core
  * @babel/cli
  # @babel/preset-env
* 依赖库
  * jquery
  * lodash
  * echarts
  * bootstrap
  * popper.js
  * core-js
  * @babel/polyfill
* 帮助module
  * cross-env
  * glob
  * single-line-log

### 附加仿Element样式Select插件


### 安装
> npm install  

### 启动
> npm start  

### 打包
> npm run build





