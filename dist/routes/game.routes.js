"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_middleware_1 = require("middlewares/validate.middleware");
var express_1 = require("express");
var game_schema_1 = require("schema/game.schema");
var games_controller_1 = require("controllers/games.controller");
var gameRouter = (0, express_1.Router)();
gameRouter
    .get('/games', games_controller_1.gamesController.getGames)
    .post('/games', (0, validate_middleware_1.validateSchema)(game_schema_1.gameSchema.createGame), games_controller_1.gamesController.create)
    .put('/games', (0, validate_middleware_1.validateSchema)(game_schema_1.gameSchema.updateGame), games_controller_1.gamesController.updateGames)
    .delete('/games', games_controller_1.gamesController.deleteGames);
exports.default = gameRouter;
