# basis-vue

## 简介
基于Vue CLI 3构建的公司门户或者个人博客手脚架。已实现多语言切换，顶部导航固定，二级路由。

## 优势
1. 相比传统html页面拥有更好的页面切换体验，访问速度更快，生产包体积更小


## 缺点
1. 因为是碎片化的html所以对SEO不利
2. 待发现...

## 注意点
1. public 文件夹的静态资源都会被简单的复制，而不经过 webpack。[详情](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9)
2. element ui 是按需引入的，可以更具自己的业务需求添加删除
3. 待补充...

## 项目结构
```bash
basis-vue
    ├── public                       -- 不需要打包的文件存放
    ├── src                          -- 开发目录
    ├      ├── assets               -- 资源文件夹
    ├      ├      └── css          -- css 存放
    ├      ├      └── js           -- js 存放
    ├      ├      └── img          -- 静态图片存放
    ├      ├── components           -- 通用组件 
    ├      ├── lang                 -- 多语言包
    ├      ├── page                 -- 页面碎片存放
    ├      ├── plugins              -- 插件存放
    ├      └── index.html           -- 宿页
    ├── theme                        -- element ui 主题        
```

## 开发
```bash

# 克隆项目
git clone https://gitee.com/laizuan/basis-gulp.git

# 安装依赖
npm install

# 启动服务
npm run serve

```

## 打包

```bash

#打包生产包
npm run  build

```

## Nginx 代理设置

```text
server {
	listen   80;
    charset utf-8;        
    server_name localhost;
     location / {
        root \dist; #网站的根目录
        index index.html; #默认文件
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 技术选型

技术 | 名称 | 官网
----|---------|------------
vue | 渐进式 JavaScript 框架 | [https://cn.vuejs.org/](https://cn.vuejs.org/)
vue-router | 路由  | [https://router.vuejs.org/](https://router.vuejs.org/)
vuex | 状态管理 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
element-ui | 基于 Vue 2.0 的桌面端组件库 | [http://element-cn.eleme.io](http://element-cn.eleme.io)
Headroom | 隐藏或展示页面元素 | [http://www.bootcss.com/p/headroom.js/](http://www.bootcss.com/p/headroom.js/)

## 效果图
![demo](https://11-1252792348.cos.ap-guangzhou.myqcloud.com/basis-gulp.gif)

## 捐助

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :tropical_drink:
![donate](https://11-1252792348.cos.ap-guangzhou.myqcloud.com/donation.jpg)


## License

[MIT](https://gitee.com/laizuan/basis-gulp/blob/master/LICENSE)