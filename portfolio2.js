const http = require('http');
const  fs = require('fs');


http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url === '/index' || req.url ==='/')
    {
        let data = fs.readFileSync('static/index.html');
        res.write(data);
    }
   else if(req.url === '/about')
    {
        let data = fs.readFileSync('static/about.html');
        res.write(data);
    }
    else if(req.url === '/projects')
    {
        let data = fs.readFileSync('static/projects.html');
        res.write(data);
    }
    else if(req.url === '/social-media')
    {
        let data = fs.readFileSync('static/social-media.html');
        res.write(data);
    }
    else{
        let data= fs.readFileSync('static/error.html');
        res.write(data);
    }

 
  
    res.end();
        
    }).listen(process.env.PORT, () => {console.log('server started at port 8080')});
