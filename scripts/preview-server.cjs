const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')

const port = Number(process.env.PORT || 4188)
const host = process.env.HOST || '127.0.0.1'
const root = path.resolve(__dirname, '..', 'dist')

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent((request.url || '/').split('?')[0])
  const filePath = path.join(root, pathname === '/' ? 'index.html' : pathname)

  if (!filePath.startsWith(root)) {
    response.writeHead(403)
    response.end('Verboten')
    return
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      fs.readFile(path.join(root, 'index.html'), (fallbackError, fallbackData) => {
        if (fallbackError) {
          response.writeHead(404)
          response.end('Nicht gefunden')
          return
        }

        response.writeHead(200, { 'Content-Type': contentTypes['.html'] })
        response.end(fallbackData)
      })
      return
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
    })
    response.end(data)
  })
})

server.listen(port, host)
