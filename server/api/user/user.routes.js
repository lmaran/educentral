"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const routes = (app) => {
    app.get("/api/user", user_controller_1.default.getAll);
};
exports.default = routes;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/api/user/user.routes.js.map