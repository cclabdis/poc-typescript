"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    if (error.code === '23505' && error.constraint === 'games_name_key') {
        return res.status(http_status_1.default.CONFLICT).send("Este jogo já foi adicionado!");
    }
    if (error.type === "joiError") {
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === "notFound") {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
    if (error.type === "conflict") {
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    }
    if (error.type === "badRequest") {
        return res.status(http_status_1.default.BAD_REQUEST).send(error.message);
    }
    if (error.type === "unprocessableEntity") {
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(error.message);
    }
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error.message);
}
exports.errorHandler = errorHandler;
