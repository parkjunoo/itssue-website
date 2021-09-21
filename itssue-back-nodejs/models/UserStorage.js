// const db = require("../config/db.js");

class UserStorage {
    static users = {
        id: ["park", "kim"],
        password: ["1234", "5678"],
        name: ["박준수", "김준호"]
    }

    static getUsers(...params) {
        const users = this.users;
        const targetUsers = params.reduce((target, field) => {
            if (users.hasOwnProperty(field)) {
                target[field] = users[field];
            }
            return newUsers;
        }, {});
        return targetUsers;
    }

    static getUserInfo(id) {
        const users = this.users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return
    }
}





module.exports = UserStorage;