const http = require('http')


const app = http.createServer((req, res)=>{
    if(req.url=='/'){
        console.log(req.url)
        res.end('Welcome to my Website')
    }

    if(req.url=="/blog"){
        console.log(req.url)
    res.end('This is a BLOG PAGE')
    }

    res.end('<h1>Page not Found</h1>')
})

app.listen(4000)