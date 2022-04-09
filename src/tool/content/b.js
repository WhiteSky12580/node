//获取漫画介绍和内容
const cheerio = require('cheerio');
const request = require('request');
const getcomic = (url) => {
        const promise = new Promise((resolve, rejects) => {
            // url = "https://www.bnman.net/comic/3475.html";
            request(url, (error, response, body) => {
                const $ = cheerio.load(body);
                const n = $('.box01 .jslist01 li').length;
                // console.log(n)
                const data = [];
                if (n < 1000) {
                    for (i = 1; i < n; i++) {
                        b = "https://www.bnman.net" + $('.jslist01 a').eq(n - i).attr('href');
                        d = $('.jslist01 a').eq(n - i).text();
                        data[i - 1] = {
                            content: d,
                            url: b
                        }

                    }
                } else {
                    data[0] = null;
                }
                const introduce = $('.mt10').text();
                const picurl = $('.bpic img').attr('src')
                const name = $('.info h2').text();
                dat = { data, introduce, picurl, name };
                // console.log(dat)
                resolve(dat);
            })
        })
        return promise;
    }
    // getcomic();

module.exports = getcomic;