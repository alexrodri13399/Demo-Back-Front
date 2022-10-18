"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./data/users.db",
    synchronize: true,
    logging: false,
    entities: [user_1.User]
});
//# sourceMappingURL=data-source.js.map