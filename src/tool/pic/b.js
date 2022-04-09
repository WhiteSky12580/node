//获取漫画图片
const cheerio = require('cheerio');
const request = require('request');
const getcomic = (url) => {
        const promise = new Promise((resolve, rejects) => {
            // url = "https://www.bnman.net/comic/26550/1666516.html"
            request(url, (error, response, body) => {
                let data = {};
                const $ = cheerio.load(body);
                const list = [];
                $('script').map(function(i) {
                    // 建议这里打印$(this) 因为this的对象可能不同
                    //因为存在script标签为空的数据， 所以判断children长度是否大于0
                    if ($(this)[0].children[0])
                        list[i] = $(this)[0].children[0].data
                        //如果要获取script标签的属性， 例如 type 
                        // console.log($(this)[0].attribs['type'])
                });
                //处理格式
                const l = list[8].split('[');
                l1 = l[1].split(']');
                l2 = l1[0].replace(/[\\]/g, '');
                pic = l2.replace(/"/g, '').split(',');
                // l4 = l3.map(function(l) { console.log(l) })
                //获取上一章和下一章
                //上一章
                let surl = null;
                let xurl = null;
                // console.log($('#surl').text())
                if ($('#surl').text() === "上一章") {
                    // console.log($('#surl').attr('href'));
                    surl = "https://www.bnman.net/" + $('#surl').attr('href');
                }
                if ($('#xurl').text() === "下一章") {
                    xurl = "https://www.bnman.net/" + $('#xurl').attr('href');
                }
                url = {
                    surl,
                    xurl
                }
                const chapter = $('.mh_readtitle strong').text();
                const comicUrl = "https://www.bnman.net/" + $('.mh_readtitle .mh_btn').attr('href');
                data = {
                    pic,
                    url,
                    chapter,
                    comicUrl
                }

                resolve(data);
            })
        })
        return promise;
    }
    // getcomic();

module.exports = getcomic;