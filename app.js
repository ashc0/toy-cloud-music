const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
// 创建web服务器
const app = express()
app.use(history())

// 托管静态资源
app.use(express.static(path.join(__dirname, './music')))

// 启动web服务器
app.listen(5000, () => {
	console.log('web server running at http://127.0.0.1')
})