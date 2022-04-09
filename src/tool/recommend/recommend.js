//推荐的漫画-百年漫画
const cheerio = require('cheerio');
const request = require('request');
const recommend = () => {
        const promise = new Promise((resolve, rejects) => {
            url = "https://www.bnman.net/"
            request(url, (error, response, body) => {
                // console.log(error)
                if (1) {

                    let data = [];
                    const $ = cheerio.load(body);
                    let name = [];
                    let pic = [];
                    for (let i = 0; i < $('#tabcon01_1 .plist01 li').length; i++) {
                        data[i] = {
                            name: $('.plist01 li a p').eq(i).html(),
                            url: "https://www.bnman.net" + $('.plist01 li a').eq(i).attr('href'),
                            pic: $('.plist01 li a img').eq(i).attr('src')
                        }
                    }
                    resolve(data);
                }
            })
        })
        return promise;
    }
    // recommend();

module.exports = recommend;