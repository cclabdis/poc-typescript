import { validateSchema } from "middlewares/validate.middleware";

import { Router } from "express";
import { gameSchema } from "schema/game.schema";
import { gamesController } from "controllers/games.controller";


const gameRouter = Router()

gameRouter
    .get('/games', gamesController.getGames)
    .post('/games', validateSchema(gameSchema.createGame), gamesController.create)
    .put('/games', validateSchema(gameSchema.updateGame), gamesController.updateGames)
    .delete('/games', gamesController.deleteGames)

export default gameRouter;