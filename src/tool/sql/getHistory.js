const db = require('./content')
const getHistory = (userId) => {
        const promise = new Promise((resolve, rejects) => {
            const sql = "SELECT * FROM user_info.history_comic where userId=" + userId;
            // console.log(sql);
            db.query(sql, (err, results) => {
                if (err) {
                    let data = {
                        success: true,
                        message: "系统错误"
                    }
                    resolve(data);
                    return console.log(err.message);
                }
                let data = results;
                for (let i of data) {
                    delete i.id;
                    delete i.userId
                }
                // console.log(data)
                resolve(data)
            })


        })

        return promise;
    }
    // getCollect(1);

module.exports = getHistory;