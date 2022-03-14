"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.get('/api', function (req, res) {
    res.sendStatus(200);
    res.send('main api route');
    return;
});
exports.default = routes;
