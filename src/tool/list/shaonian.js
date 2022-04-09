//推荐的漫画-百年漫画
const cheerio = require('cheerio');
const request = require('request');
const shaonian = (number) => {
        const promise = new Promise((resolve, rejects) => {
            if (number != 1)
                url = "https://www.bnman.net/list/shaonian/" + number + ".html";
            else
                url = "https://www.bnman.net/list/shaonian.html"
                // console.log(url)
            request(url, (error, response, body) => {
                // console.log(error)
                if (1) {

                    let data = [];
                    const $ = cheerio.load(body);
                    let name = [];
                    let pic = [];
                    for (let i = 0; i < $('#list_img li').length; i++) {
                        data[i] = {
                            name: $('#list_img li a p').eq(i).html(),
                            url: "https://www.bnman.net" + $('#list_img li a').eq(i).attr('href'),
                            pic: $('#list_img li a img').eq(i).attr('src')
                        }
                    }
                    // console.log(data)
                    resolve(data);
                }
            })
        })
        return promise;
    }
    // recommend(2);

module.exports = shaonian;