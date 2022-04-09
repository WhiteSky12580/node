// const app = require('../../app')
// const getcomic = require('../tool/search/d');
// const getcomicbn = require('../tool/search/b.js');
// //获取漫画主页内容
// const getcontentBainian = require('../tool/content/b');
// //获取漫画图片
// const getpicBiannian = require('../tool/pic/b');
// //获取推荐漫画
// const recommend = require('../tool/recommend/recommend');
// const recommend2 = require('../tool/recommend/recommend2');
// //登录
// const login = require('../tool/sql/login')
//     //注册
// const register = require('../tool/sql/register')
//     // const { SucessModel } = require('../model/resModel.js');
//     // const { rejects } = require('assert');
//     //漫画收藏
// const collect = require('../tool/sql/collect');
// const getCollect = require('../tool/sql/getCollect');
// //历史
// const history = require('../tool/sql/history');
// const getHistory = require('../tool/sql/getHistory');
// //漫画列表
// const news = require('../tool/list/new');
// const shaonian = require('../tool/list/shaonian');
// const shaonv = require('../tool/list/shaonv');
// const youth = require('../tool/list/qingnian');
// const women = require('../tool/list/women');
// //处理路由

// app.get("/login", (req, res) => {
//     login(req.query.user, req.query.pwd).then(res => {
//         resolve(res.send('hello world'));
//     })
// })

// //注册账号
// app.get("/login", (req, res) => {
//     register(req.query.username, req.query.pwd, req.query.account).then(res => {
//         resolve(res.send('hello world'));
//     })
// })

// app.get("/comic/list", (req, res) => {
//         recommend().then(res => {
//             // res.send(new SucessModel(res));
//         })
//     })
//     // 推荐漫画
// app.get("/comic/list1", (req, res) => {
//         recommend2().then(res => {
//             // res.send(new SucessModel(res));
//         })

//     })
//     //搜索漫画 
// app.get("/comic/search", (req, res) => {
//         const name = req.query.name;
//         getcomic(name).then((res) => {
//             // res.send(new SucessModel(res));
//         })
//     })
//     //搜索漫画
// app.get("/comic/searchbn", (req, res) => {
//         const name = req.query.name;
//         getcomicbn(name).then((res) => {
//             // console.log(res);
//             // res.send(new SucessModel(res));
//         })
//     })
//     //获取漫画图片
// app.get("/comic/pic", (req, res) => {
//         const url = req.query.url;
//         getpicBiannian(url).then((res) => {
//             // res.send(new SucessModel(res));
//         })
//     })
//     //漫画主页
//     // if (method === "GET" && req.path === "/api/comic/content")
// app.get("/comic/content", (req, res) => {
//         const url = req.query.url;
//         getcontentBainian(url).then((res) => {
//             // console.log(res)
//             // res.send(new SucessModel(res))
//         })

//     })
//     //收藏漫画
// app.get("/comic/collect", (req, res) => {
//         const id = req.query.userId;
//         const url = req.query.url;
//         const pic = req.query.pic;
//         const name = req.query.name;
//         collect(id, name, pic, url).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得用户收藏漫画
//     // if (method === "GET" && req.path === "/api/comic/getCollect")
// app.get("/comic/getCollect", (req, res) => {
//         const userId = req.query.userId;
//         getCollect(userId).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //增加历史记录
// app.get("/comic/history", (req, res) => {
//         const id = req.query.userId;
//         const url = req.query.url;
//         const pic = req.query.pic;
//         const name = req.query.name;
//         history(id, name, pic, url).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得用户历史漫画
// app.get("/comic/getHistory", (req, res) => {
//         const userId = req.query.userId;
//         getHistory(userId).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得最新漫画列表
// app.get("/comic/new", (req, res) => {
//         const number = req.query.number;
//         news(number).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得少年漫画列表
// app.get("/comic/shaonian", (req, res) => {
//         const number = req.query.number;
//         shaonian(number).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得少女漫画列表
// app.get("/comic/shaonv", (req, res) => {
//         const number = req.query.number;
//         shaonv(number).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得青年漫画列表
// app.get("/comic/youth", (req, res) => {
//         const number = req.query.number;
//         youth(number).then(res => {
//             // res.send(new SucessModel(res))
//         })
//     })
//     //获得女性漫画列表
// app.get("/comic/women", (req, res) => {
//     const number = req.query.number;
//     women(number).then(res => {
//         // res.send(new SucessModel(res))
//     })
// })