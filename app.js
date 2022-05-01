var http = require('http')
var url = require('url')
var path = require('path')
const PORT = 1234
const express = require('express')
const app = express()
var fs = require('fs')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
var dir = path.join(__dirname, 'public')
var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
}

app.use(express.static('public'))
app.listen(PORT - 1, () => {
  console.log(`Running file server on PORT ${PORT - 1}...`)
})
/*
readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})
*/

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true)
    var filename = '.' + q.pathname
    let path = q.pathname
    console.log(String(path) + '  from: ' + req.socket.localAddress)

    if (path === 'favicon.ico') {
      fs.readFile('base.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    } else if (path === '/') {
      fs.readFile('base.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    } else if (path === '/home') {
      fs.readFile('home.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    } else if (String(path).slice(0, 12) === '/home/iframe') {
      fs.readFile('fullscreen/iframe.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    } else if (String(path).slice(0, 5) === '/view') {
      fs.readFile('fullscreen/full.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)

        return res.end()
      })
    }
  })
  .listen(PORT)
console.log(`Running http server on PORT ${PORT}...`)
