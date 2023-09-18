"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_routes_1.default);
app.use(function (err, req, res, next) {
    if (err.name === "Conflict") {
        return res.status(422).send(err.message);
    }
    if (err.name === "NotFound") {
        return res.status(404).send(err.message);
    }
    console.log(err);
    res.status(500).send("someting is worong cantact the developer :(");
});
var port = Number(process.env.PORT) || 5000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
