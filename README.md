# Vue 脚手架模版

## Done
- ElementUI 2.x
- Webpack 2.x
- Eslint Airbnb（可选）
- Vue 2.x
- Vue Router
- mul pages
- Sass or Less （可选）
- Mockjs （可选）
- Axios

## Refer
[element-starter](https://github.com/ElementUI/element-starter)

## Use
安装 [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
npm install -g vue-cli
```

``` bash
vue init Veblin/vue-mul my-project
```

## Included

参考：https://github.com/vuejs-templates/webpack

`npm run dev`: first-in-class development experience.

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps

`npm run build`: Production ready build.

- JavaScript minified with UglifyJS.
- HTML minified with html-minifier.
- CSS across all components extracted into a single file and minified with cssnano.
- All static assets compiled with version hashes for efficient long-term caching, and a production - index.html is auto-generated with proper URLs to these generated assets.
- Use npm run build --reportto build with bundle size analytics.

## 编辑器配置
### Eslint 自动修复
- VSCode 安装 `Eslint`
- 在用户配置中添加如下

``` javascript
"eslint.validate": [
	"javascript",
	"javascriptreact",
	{ "language": "html",
		"autoFix": true } ,
	{ "language": "vue",
		"autoFix": true }
]
```


## TODO

文档待丰富内容
