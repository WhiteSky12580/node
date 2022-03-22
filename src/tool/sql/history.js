const db = require('./content')
const history = (userId, name, pic, url) => {
        const promise = new Promise((resolve, rejects) => {
            const sql = "INSERT INTO user_info.history_comic(userId,name,pic,url) values (" +
                userId + "," + "'" + name + "'" + ",'" + pic + "'" + ",'" + url + "'" + ")";
            const sql1 = "select count(*) as number from user_info.history_comic where userId=" + "'" + userId + "'" + " and url=" + "'" + url + "';"
                // console.log(sql1);
            let number;
            db.query(sql1, (err, results) => {
                if (err) {
                    let data = {
                        success: true,
                        message: "系统错误"
                    }
                    resolve(data);
                    return console.log(err.message);
                }
                number = results[0].number;
                if (number == "0") {
                    // console.log(sql)
                    db.query(sql, (err, results) => {
                        console.log(sql)
                        if (err) {
                            resolve('系统错误');
                            return console.log(err.message);
                        }
                        let data = {
                                success: true,
                                message: "加入历史记录成功"
                            }
                            // console.log(results);
                        resolve(data);
                    })
                } else {
                    let data = {
                            success: false,
                            message: "已加入历史记录"
                        }
                        // console.log(data)
                    resolve(data);
                }

            })


        })

        return promise;
    }
    // history("1", "大", "ssk", "www");

module.exports = history;