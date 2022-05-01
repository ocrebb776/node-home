var http = require('http')
var fs = require('fs')
var path = require('path')

let port = 1234
http
  .createServer(function (request, response) {
    if (path === 'favicon.ico') {
    } else if (path === '/') {
      fs.readFile('base.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)

        return response.end()
      })
    } else if (path === '/home') {
      /*sends user to home page*/
      fs.readFile('home.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)

        return response.end()
      })
    } else if (String(path).slice(0, 12) === '/home/iframe') {
      /* sends user to 8 letter fullscreen*/
      fs.readFile('fullscreen/iframe.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)

        return response.end()
      })
    } else {
      /* if url is incorrect diplay 404 and link to homepage*/
      fs.readFile('404.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)

        return response.end()
      })
    }
  })
  .listen(port)
console.log('server up and running at port : ' + port)
