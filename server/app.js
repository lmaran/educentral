"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const environment_1 = require("./config/environment");
const initialize_1 = require("./initialize");
let app = express();
app = initialize_1.default(app);
const server = app.listen(environment_1.default.port, () => {
    console.log(`Express server listening on port ${environment_1.default.port} in ${environment_1.default.env} mode`);
});
exports.default = server;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/app.js.map