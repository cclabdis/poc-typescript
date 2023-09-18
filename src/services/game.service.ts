import { GameProtocol } from "protocols/game.protocol"
import { gamesRepository } from "repositories/game.repository"


async function allGamesService() {
    return await gamesRepository.allGames()
}

async function createService (game: GameProtocol){
    const isExist = await gamesRepository.findById(game.id)
    if(isExist) throw { type:"Conflict", message: "[ERROR] game exist."}

    await gamesRepository.postNewGame(game)
}

async function updateService(game: GameProtocol) {
    const isExist = await gamesRepository.findById(game.id)
    if(!isExist) throw { type:"NotFound", message: "[ERROR] Game doesnt exist."}

    await gamesRepository.updateGame(game)
}

async function deleteService(id: number) {
    const isExist = await gamesRepository.findById(id)
    if(!isExist) throw { type:"NotFound", message: "[ERROR] games doesnt exist."}

    await gamesRepository.deleteGame(id) 
}

// allGames,
//     postNewGame,
//     updateGame,
//     deleteGame




export const gamesService = {
    deleteService,
    updateService,
    createService,
    allGamesService
}