const { rejects } = require('assert');
const querystring = require('querystring')
const handleComicRote = require("./src/routes/comic.js")
const serveHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    //处理POST数据
    const getPostData = (req) => {
            const promise = new Promise((resolve, rejects) => {
                if (req.method != "POST") {
                    resolve({});
                    return;
                }
                if (req.headers['Content-Type'] !== 'application/json') {
                    // resolve({});
                    // console.log("请求头未添加")
                    // return;
                }
                let postData = '';
                req.on('data', (chunk) => {
                    postData += chunk.toString();
                })
                req.on('end', () => {
                    if (!postData) {
                        resolve({});
                        return;
                    }
                    resolve(
                        JSON.parse(postData)
                    )
                })
            })
            return promise;
        }
        //解析路由
    const url = req.url;
    req.path = url.split('?')[0];
    //解析query
    req.query = querystring.parse(url.split('?')[1])
    getPostData(req).then((postData) => {
        req.body = postData;
        // console.log(req.path)
        //处理路由
        handleComicRote(req, res).then((response) => {
            if (response) {
                res.end(JSON.stringify(response))
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('404 Not Found')
                console.log(404);
                res.end();
            }
        })

    })


}
module.exports = serveHandler;