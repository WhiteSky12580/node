const { rejects } = require('assert');
const https = require('https');
// const request = require('request');
// const cheerio = require('cheerio');
// const axios = require('axios')
// request('https://sacg.dmzj.com/comicsum/search.php?s=我怎么可能成为', (error, response, body) => {
// console.log(body);
// const $ = cheerio.load(body);
// console.log($.html());
// console.log($('.wrap .leftmiddle .leftmiddle_mr .tcaricature_new').html())
// .each((i, item) => {
//     console.log(item.attribs);
// })
// })
// const comicData = ''
const getcomic = (name) => {
    const promise = new Promise((resolve, rejects) => {
        https.get('https://sacg.dmzj.com/comicsum/search.php?s=' + name, (res) => {
            let data = '';
            res.on('data', (d) => {
                data += d.toString();
            })
            res.on('end', () => {
                if (data == "var g_search_data = [];")
                    resolve()
                else {
                    data = data.slice(22, -3).replace(/\\/g, "");
                    data = data.split(',');
                    let comic = { name: '', url: '', pic: '', type: '' };
                    comic.name = unescape(data[1].replace(/\u/g, "%u")).slice(14, -1);
                    let a = data[7].slice(13, -1);
                    comic.url = "https:" + a;
                    comic.pic = data[4].slice(9, -1);
                    comic.type = "动漫之家"
                    resolve(comic);
                }
            })
        })
    })
    return promise;
}
module.exports = getcomic;