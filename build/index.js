"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var transformer_1 = __importDefault(require("./transformer"));
var app = (0, express_1.default)();
var port = 3000;
// app.use('/api', routes);
app.use(express_1.default.static('assets'));
app.use('/api', function (req, res) {
    var imageName = req.query.name;
    var w = req.query.width;
    var h = req.query.height;
    res.send("nome=".concat(imageName, ".jpg largura=").concat(w, "px altura=").concat(h, "px"));
    (0, transformer_1.default)(imageName, w, h);
});
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
