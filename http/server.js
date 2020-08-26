const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function(req, res){

  const file = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(__dirname, 'public', file);
  const extName = path.extname(filePath);
  
  const allowedFileTypes = ['.html', '.css', '.js'];
  const allowed = allowedFileTypes.find(item => extName);

  fs.readFile( filePath, (err, content) => {
        if (err) throw err;
        res.end(content);
      }
  );
}).listen(5000, () => console.log('servidor rodando'));