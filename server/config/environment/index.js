"use strict";
// process.env.NODE_ENV = process.env.NODE_ENV || "development";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const path = require("path");
const development_1 = require("./development");
// import stagingConfig from "./staging";
// import productionConfig from "./production";
// import testConfig from "./test";
const envConfig = {
    development: development_1.default,
};
const common = {
    env: process.env.NODE_ENV || "development",
    mongo: {
        options: {
            db: {}
        }
    },
    port: process.env.PORT || 1410,
    rollbarToken: "c40dd41c292340419923230eed1d0d61",
    root: path.normalize(__dirname + "/../../..") // 3 folders back from the current folder
};
const config = _.merge(common, envConfig[common.env]);
exports.default = config;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/config/environment/index.js.map