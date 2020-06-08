# basis-vue

## 简介
基于Vue CLI 4构建的公司门户或者个人博客手脚架，开箱即用   
- 多语言
- ElementUi 按需加载
- CDN 引入第三方依赖
- 路由懒加载
- 顶部导航固定
- 二级路由
- eslint 代码规范

## 注意点
1. public 文件夹的静态资源都会被简单的复制，而不经过 webpack。[详情](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9)
2. ElementUI 是按需引入，可以更具自己的业务需求添加删除
3. 如果不想使用引入CDN引入删除`externals`节点和`chainWebpack`CDN配置，最后删除public下面的index.html中CDN注入代码即可

## 项目结构
```bash
basis-vue
    ├── public                     -- 不进过webpack打开目录
    ├── src                        -- 开发目录
    ├      ├── assets              -- 资源文件夹
    ├      ├      └── css          -- css 存放
    ├      ├      └── js           -- js 存放
    ├      ├      └── img          -- 静态图片存放
    ├      ├── components          -- 封装组件 
    ├      ├── lang                -- 多语言包
    ├      ├── views               -- 路由页面
    ├── theme                      -- element ui 主题        
```

## 开发
```js

# 克隆项目
git clone https://github.com/laizuan/basis-vue.git

# 安装依赖
yarn install

# 启动服务
yarn run dev

```

## 打包

```js

#打包生产包
yarn run build

```

## 分析依赖
```js
yarn run preview
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

## 演示地址
![https://git.io/LBasic](https://git.io/LBasic)

## 捐助

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :tropical_drink:
![donate](https://11-1252792348.cos.ap-guangzhou.myqcloud.com/donation.jpg)


## License

[MIT](https://github.com/laizuan/basis-vue/blob/master/LICENSE)
