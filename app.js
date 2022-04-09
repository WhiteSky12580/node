const express = require('express');
const app = express();
const getcomic = require('./src/tool/search/d');
const getcomicbn = require('./src/tool/search/b.js');
//获取漫画主页内容
const getcontentBainian = require('./src/tool/content/b');
//获取漫画图片
const getpicBiannian = require('./src/tool/pic/b');
//获取推荐漫画
const recommend = require('./src/tool/recommend/recommend');
const recommend2 = require('./src/tool/recommend/recommend2');
//登录
const login = require('./src/tool/sql/login');
//注册
const register = require('./src/tool/sql/register');
const { SucessModel } = require('./src/model/responseModel');
//漫画收藏
const collect = require('./src/tool/sql/collect');
const getCollect = require('./src/tool/sql/getCollect');
//历史
const history = require('./src/tool/sql/history');
const getHistory = require('./src/tool/sql/getHistory');
//漫画列表
const news = require('./src/tool/list/new');
const shaonian = require('./src/tool/list/shaonian');
const shaonv = require('./src/tool/list/shaonv');
const youth = require('./src/tool/list/qingnian');
const women = require('./src/tool/list/women');
app.all("/*", (req, res, next) => {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
});
//处理路由

app.get("/login", (req, res) => {
    login(req.query.user, req.query.pwd).then(response => {
        res.send(new SucessModel(response));
    })
});

//注册账号
app.get("/login", (req, res) => {
    register(req.query.username, req.query.pwd, req.query.account).then(response => {
        res.send(new SucessModel(response));
    })
});

app.get("/comic/list", (req, res) => {
    recommend().then(response => {
        res.send(new SucessModel(response));
    })
});
// 推荐漫画
app.get("/comic/list1", (req, res) => {
    recommend2().then(response => {
        res.send(new SucessModel(response));
    })

});
//搜索漫画 
app.get("/comic/search", (req, res) => {
    const name = req.query.name;
    getcomic(name).then(response => {
        res.send(new SucessModel(response));
    })
});
//搜索漫画
app.get("/comic/searchbn", (req, res) => {
    const name = req.query.name;
    getcomicbn(name).then(response => {
        // console.logres;
        res.send(new SucessModel(response));
    })
});
//获取漫画图片
app.get("/comic/pic", (req, res) => {
    const url = req.query.url;
    getpicBiannian(url).then(response => {
        res.send(new SucessModel(response));
    })
});
//漫画主页
app.get("/comic/content", (req, res) => {
    const url = req.query.url;
    getcontentBainian(url).then(response => {
        // console.logres
        res.send(new SucessModel(response));
    })
});
//收藏漫画
app.get("/comic/collect", (req, res) => {
    const id = req.query.userId;
    const url = req.query.url;
    const pic = req.query.pic;
    const name = req.query.name;
    collect(id, name, pic, url).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得用户收藏漫画
app.get("/comic/getCollect", (req, res) => {
    const userId = req.query.userId;
    getCollect(userId).then(response => {
        res.send(new SucessModel(response));
    })
});
//增加历史记录
app.get("/comic/history", (req, res) => {
    const id = req.query.userId;
    const url = req.query.url;
    const pic = req.query.pic;
    const name = req.query.name;
    history(id, name, pic, url).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得用户历史漫画
app.get("/comic/getHistory", (req, res) => {
    const userId = req.query.userId;
    getHistory(userId).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得最新漫画列表
app.get("/comic/new", (req, res) => {
    const number = req.query.number;
    news(number).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得少年漫画列表
app.get("/comic/shaonian", (req, res) => {
    const number = req.query.number;
    shaonian(number).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得少女漫画列表
app.get("/comic/shaonv", (req, res) => {
    const number = req.query.number;
    shaonv(number).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得青年漫画列表
app.get("/comic/youth", (req, res) => {
    const number = req.query.number;
    youth(number).then(response => {
        res.send(new SucessModel(response));
    })
});
//获得女性漫画列表
app.get("/comic/women", (req, res) => {
    const number = req.query.number;
    women(number).then(response => {
        res.send(new SucessModel(response));
    })
});

app.listen(5000, () => {
    console.log("Server running at port 3000")
});