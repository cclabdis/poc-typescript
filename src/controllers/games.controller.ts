import httpStatus from "http-status";
import { gamesService } from "../services/game.service";
import { Request, Response } from "express";


async function create(req: Request, res: Response) {
    await gamesService.createService(req.body)
    res.status(201).send(httpStatus.CREATED)

}


async function getGames(req: Request, res: Response) {
    const games = await gamesService.allGamesService()
    res.status(201).send(games)

}

async function updateGames(req: Request, res: Response) {
    await gamesService.updateService(req.body)
    res.status(200).send(httpStatus.OK)
}

async function deleteGames(req: Request, res: Response) {
    const id = Number(req.params.id)

    await gamesService.deleteService(id)
    res.status(202).send(httpStatus.OK)

}


export const gamesController = {
    getGames,
    create,
    updateGames,
    deleteGames
}

