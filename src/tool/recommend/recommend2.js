//推荐的漫画-百年漫画
const cheerio = require('cheerio');
const { eq } = require('cheerio/lib/api/traversing');
const request = require('request');
const recommend = () => {
        const promise = new Promise((resolve, rejects) => {
            url = "https://www.bnman.net/"
            request(url, (error, response, body) => {
                let data = {};
                let boy = [];
                let girl = [];
                let youth = [];
                let female = []
                const $ = cheerio.load(body);
                let name = [];
                let pic = [];
                const n = $('.xfbox_c .current .plist01 li').length;
                for (let i = 0; i < n; i++) {
                    // console.log($('.xfbox_c .current .plist01 li img').eq(i).attr('src'));
                    // console.log($('.xfbox_c .current .plist01 li a').eq(i).attr('href'));
                    // console.log($('.xfbox_c .current .plist01 li p').eq(i).text());
                    if (i < 10) {
                        boy[i] = {
                            name: $('.xfbox_c .current .plist01 li p').eq(i).text(),
                            url: "https://www.bnman.net" + $('.xfbox_c .current .plist01 li a').eq(i).attr('href'),
                            pic: $('.xfbox_c .current .plist01 li img').eq(i).attr('src')
                        }
                    } else if (i < 20) {
                        girl[i - 10] = {
                            name: $('.xfbox_c .current .plist01 li p').eq(i).text(),
                            url: "https://www.bnman.net" + $('.xfbox_c .current .plist01 li a').eq(i).attr('href'),
                            pic: $('.xfbox_c .current .plist01 li img').eq(i).attr('src')
                        }
                    } else if (i < 30) {
                        youth[i - 20] = {
                            name: $('.xfbox_c .current .plist01 li p').eq(i).text(),
                            url: "https://www.bnman.net" + $('.xfbox_c .current .plist01 li a').eq(i).attr('href'),
                            pic: $('.xfbox_c .current .plist01 li img').eq(i).attr('src')
                        }
                    } else if (i < 40) {
                        female[i - 30] = {
                            name: $('.xfbox_c .current .plist01 li p').eq(i).text(),
                            url: "https://www.bnman.net" + $('.xfbox_c .current .plist01 li a').eq(i).attr('href'),
                            pic: $('.xfbox_c .current .plist01 li img').eq(i).attr('src')
                        }
                    }
                }
                data = { boy, girl, youth, female }
                    // console.log(data)
                resolve(data);
            })
        })
        return promise;
    }
    // recommend();

module.exports = recommend;