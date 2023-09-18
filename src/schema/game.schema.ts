import Joi from "joi";
import { GameProtocol, NewGame } from "protocols/game.protocol";

const createGame = Joi.object<NewGame>({
  name: Joi.string().required(),
  release: Joi.date().iso().required(),
  studio: Joi.string().required(),
});

const updateGame = Joi.object<GameProtocol>({
  id: Joi.number().required(),
  name: Joi.string().required(),
  release: Joi.date().iso().required(),
  studio: Joi.string().required(),
});

export const gameSchema = { createGame, updateGame }