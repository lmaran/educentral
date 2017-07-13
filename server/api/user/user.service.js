"use strict";
// import { mongoService } from "../../util/mongo.service";
Object.defineProperty(exports, "__esModule", { value: true });
const collection = "users";
const service = {
    getAll: (next) => {
        // mongoService.getDb(function (err, db) {
        //     // if (err) { return next(err, null); }
        //     db.collection(collection).find().toArray(function(err2, docs) {
        //         next(null, docs);
        next(null, [{ name: "user1" }]);
        //     });
        // });
    },
};
exports.default = service;
//# sourceMappingURL=/home/rof/src/github.com/lmaran/educentral/dist/server/api/user/user.service.js.map