const getcomic = require('../tool/search/d');
const getcomicbn = require('../tool/search/b.js');
//获取漫画主页内容
const getcontentBainian = require('../tool/content/b');
//获取漫画图片
const getpicBiannian = require('../tool/pic/b');
//获取推荐漫画
const recommend = require('../tool/recommend/recommend');
const recommend2 = require('../tool/recommend/recommend2');
//登录
const login = require('../tool/sql/login')
    //注册
const register = require('../tool/sql/register')
const { SucessModel, ErrorModel } = require('../model/responseModel.js');
// const { rejects } = require('assert');
//漫画收藏
const collect = require('../tool/sql/collect');
const getCollect = require('../tool/sql/getCollect');
//历史
const history = require('../tool/sql/history');
const getHistory = require('../tool/sql/getHistory');
//漫画列表
const news = require('../tool/list/new');
const shaonian = require('../tool/list/shaonian');
const shaonv = require('../tool/list/shaonv');
const youth = require('../tool/list/qingnian');
const women = require('../tool/list/women');
//处理路由
const handleComicRote = (req, res) => {
    const promise = new Promise((resolve, rejects) => {
        const method = req.method;
        if (method === 'GET' && req.path === "/api/login") {
            login(req.query.user, req.query.pwd).then(res => {
                    resolve(new SucessModel(res));
                })
                // resolve(message = "获取推荐漫画列表的接口")
        }
        //注册账号
        if (method === 'POST' && req.path === "/api/register") {
            register(req.query.username, req.query.pwd, req.query.account).then(res => {
                    resolve(new SucessModel(res));
                })
                // resolve(message = "获取推荐漫画列表的接口")
        }

        if (method === 'GET' && req.path === "/api/comic/list") {
            recommend().then(res => {
                    resolve(new SucessModel(res));
                })
                // resolve(message = "获取推荐漫画列表的接口")

        }
        if (method === 'GET' && req.path === "/api/comic/list1") {
            recommend2().then(res => {
                    resolve(new SucessModel(res));
                })
                // resolve(message = "获取推荐漫画列表的接口")

        }
        if (method === "GET" && req.path === "/api/comic/search") {
            const name = req.query.name;
            getcomic(name).then((response) => {
                resolve(new SucessModel(response));
            })
        }
        //搜索漫画
        if (method === "GET" && req.path === "/api/comic/searchbn") {
            const name = req.query.name;
            getcomicbn(name).then((response) => {
                // console.log(response);
                resolve(new SucessModel(response));
            })
        }
        //获取漫画图片
        if (method === "GET" && req.path === "/api/comic/pic") {
            const url = req.query.url;
            getpicBiannian(url).then((res) => {
                resolve(new SucessModel(res));
            })

        }
        //漫画主页
        if (method === "GET" && req.path === "/api/comic/content") {
            const url = req.query.url;
            getcontentBainian(url).then((res) => {
                // console.log(res)
                resolve(new SucessModel(res))
            })

        }
        //收藏漫画
        if (method === "GET" && req.path === "/api/comic/collect") {
            const id = req.query.userId;
            const url = req.query.url;
            const pic = req.query.pic;
            const name = req.query.name;
            collect(id, name, pic, url).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得用户收藏漫画
        if (method === "GET" && req.path === "/api/comic/getCollect") {
            const userId = req.query.userId;
            getCollect(userId).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //增加历史记录
        if (method === "GET" && req.path === "/api/comic/history") {
            const id = req.query.userId;
            const url = req.query.url;
            const pic = req.query.pic;
            const name = req.query.name;
            history(id, name, pic, url).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得用户历史漫画
        if (method === "GET" && req.path === "/api/comic/getHistory") {
            const userId = req.query.userId;
            getHistory(userId).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得最新漫画列表
        if (method === "GET" && req.path === "/list/api/comic/new") {
            const number = req.query.number;
            news(number).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得少年漫画列表
        if (method === "GET" && req.path === "/list/api/comic/shaonian") {
            const number = req.query.number;
            shaonian(number).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得少女漫画列表
        if (method === "GET" && req.path === "/list/api/comic/shaonv") {
            const number = req.query.number;
            shaonv(number).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得青年漫画列表
        if (method === "GET" && req.path === "/list/api/comic/youth") {
            const number = req.query.number;
            youth(number).then(res => {
                resolve(new SucessModel(res))
            })
        }
        //获得女性漫画列表
        if (method === "GET" && req.path === "/list/api/comic/women") {
            const number = req.query.number;
            women(number).then(res => {
                resolve(new SucessModel(res))
            })
        }


    })
    return promise;
}
module.exports = handleComicRote;