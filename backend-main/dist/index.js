"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_user_1 = __importDefault(require("./routes/api_user"));
require("reflect-metadata");
const data_source_1 = require("./data-source");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8080; // default port to listen
data_source_1.AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_user_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = data_source_1.AppDataSource;
//# sourceMappingURL=index.js.map