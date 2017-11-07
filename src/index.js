const fs = require('fs')
const http = require('http')

fs.readFile('./cat.jpg', 'base64', (err, data) => {
  if (err) throw err
  const body = `<html><img src="data:image/jpeg;base64,${data}" /></html>`
  http
    .createServer((req, res) => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
        // 'Content-Transfer-Encoding': 'base64'
      })
      res.end(body)
    })
    .listen(3000)
  console.log('Server running at http://localhost:3000/')
})
