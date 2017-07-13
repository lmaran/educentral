"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const controller = {
    getAll: (req, res, next) => {
        return user_service_1.default.getAll((err, users) => {
            // if(err) { return handleError(res, err); }
            res.status(200).json(users);
        });
        // res.json([{name: "aaa"}]);
    },
};
exports.default = controller;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/api/user/user.controller.js.map