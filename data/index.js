const fs = require("fs");
const path = require("path");

module.exports = {
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/user.json"), "utf-8")),
    writeUsersJson: (data) => {
        fs.writeFileSync(path.join(__dirname, "../data/user.json"), JSON.stringify(data), "utf-8")
    }
}