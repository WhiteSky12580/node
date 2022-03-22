const db = require('./content')
const login = (user, pwd) => {
        const promise = new Promise((resolve, rejects) => {
            const sql = "SELECT * FROM user_info.users where account_number=" + "'" + user + "'";
            db.query(sql, (err, results) => {
                if (err) {
                    resolve('账号或密码错误');
                    return console.log(err.message);
                }
                if (results[0]) {
                    if (results[0].password == pwd)
                        resolve(results[0]);
                    else
                        resolve('账号或密码错误')
                } else {
                    resolve('账号或密码错误')
                }
            })
        })
        return promise;
    }
    // login('1767118084', '123').then(res => console.log(res))

module.exports = login;