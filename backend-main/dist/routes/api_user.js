"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../entity/user");
const index_1 = __importDefault(require("../index"));
const crypto_1 = __importDefault(require("crypto"));
const router = (0, express_1.Router)();
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        const user = new user_1.User;
        user.username = username;
        user.password = crypto_1.default.createHash('sha256').update(password).digest('hex');
        const newUser = yield index_1.default.getRepository(user_1.User).create(user);
        const result = yield index_1.default.getRepository(user_1.User).save(newUser);
        res.json({
            status: 200,
            message: `El usuario ${username} se creó correctamente`
        });
    }
    catch (error) {
        res.json({
            status: 400,
            message: "Bad Request"
        });
    }
}));
exports.default = router;
//# sourceMappingURL=api_user.js.map