"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("./api/user/user.routes");
// import homeRoutes from "./api/home/home.routes";
// import adminRoutes from "./api/admin/admin.routes";
const allRoutes = (app) => {
    // API routes
    user_routes_1.default(app);
    // // server-side views
    // homeRoutes(app);
    // // client-side views
    // adminRoutes(app);
};
exports.default = allRoutes;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/routes.js.map