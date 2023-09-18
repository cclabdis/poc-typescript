"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var createGame = joi_1.default.object({
    name: joi_1.default.string().required(),
    release: joi_1.default.date().iso().required(),
    studio: joi_1.default.string().required(),
});
var updateGame = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
    release: joi_1.default.date().iso().required(),
    studio: joi_1.default.string().required(),
});
exports.gameSchema = { createGame: createGame, updateGame: updateGame };
