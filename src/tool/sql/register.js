const db = require('./content');
const register = (username, pwd, account_number) => {
        const promise = new Promise((resolve, rejects) => {
            const sql = "INSERT INTO users(username,password,account_number) values (" + "'" +
                username + "'" + "," + "'" + pwd + "'" + "," + "'" + account_number + "'" + ")";
            db.query(sql, (err, results) => {
                if (err) {

                    // return console.log(err);
                    let data = {
                        success: false,
                        message: "账号已被使用"
                    }
                    resolve(data);
                } else {
                    console.log(results);
                    let data = {
                        success: true,
                        message: "创建账号成功"
                    }
                    resolve(data);
                }

            })

        })
        return promise;
    }
    // register('辛洋', '123', '17671').then(res => console.log(res))

module.exports = register;