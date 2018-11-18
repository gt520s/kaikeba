let http = require('http');
let fs = require('fs');
let qs = require('qs'); //解析查询参数的
var ser = http.createServer((req,res)=>{
    const  url = req.url;
    const method = req.method
    if(url === '/' && method === 'GET'){
        fs.readFile('./index.html',(err,data)=>{
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.end(data)
        })
    }else if(url === '/api/user' && method === 'GET'){
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify({"a":12,"b":5}))
    }else if(url === '/api/user' && method === 'POST'){
        let body = [];
        req.on('data',chunk=>{
            console.log(chunk)
            body.push(chunk)
        }).on('end',()=>{
            //转换成字符串
            body = Buffer.concat(body).toString()
            //转换并保存
            const user = qs.parse(body)
            
        })
    }
})
ser.listen(3000)