//搜索漫画结果
const cheerio = require('cheerio');
const request = require('request');
const getcomic = (name) => {
    const promise = new Promise((resolve, rejects) => {
        const str = encodeURI(name);
        // const str = encodeURI('我怎么可')
        request('https://www.bnman.net/search.html?keyword=' + str, (error, response, body) => {
            const $ = cheerio.load(body);
            const ul = $('#list_img');
            let data = [];
            //获取漫画
            for (let i = 0; i < $('#list_img li').length; i++) {
                data[i] = {
                    name: ul.children().children().eq(i).children('p').text(),
                    pic: ul.children().children().eq(i).children('img').attr('src'),
                    url: "https://www.bnman.net" + ul.children().children().eq(i).attr('href'),
                    type: "百年漫画"

                }
            }
            // console.log(data);
            resolve(data);
        })
    })
    return promise;
}

// getcomic()
module.exports = getcomic;