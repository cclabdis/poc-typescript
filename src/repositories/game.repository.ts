import { GameProtocol, NewGame } from "protocols/game.protocol"
import { db } from "../database/database"


async function findById(id:number){
    return (await db.query<GameProtocol>(`SELECT * FROM games WHERE id = $1`,
    [id])).rows[0]
}
//GET 

async function allGames() {
    return (await db.query<GameProtocol>(`SELECT * FROM games`)).rows
}

//POST

async function postNewGame(game:NewGame){
    await db.query(`INSERT INTO games ("name", "release", "studio") VALUES($1,$2, $3)`,
    [game.name, game.release, game.studio])
}


//PUT

async function updateGame(game:GameProtocol){
    return (await db.query<GameProtocol>(`UPDATE games SET "name" = $1,"release" = $2, "studio" = $3  where id = $4 `,[game.name,game.release,game.studio,game.id])).rows[0]
}

//DELETE

async function  deleteGame(id:number) { 
    await db.query(`DELETE FROM games WHERE id =$1`,[id])
}

export const gamesRepository = {
    findById,
    allGames,
    postNewGame,
    updateGame,
    deleteGame
}