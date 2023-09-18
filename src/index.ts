import express, {Response, Request, NextFunction} from "express"
import "express-async-errors"
import router from "./routes/index.routes"
import dotenv from "dotenv"
import { ApplicationError } from "protocols/game.protocol"
dotenv.config()

const app = express()
app.use(express.json())
app.use(router)
app.use((err:ApplicationError,req:Request,res:Response,next:NextFunction)=>{
    if(err.name === "Conflict"){
        return res.status(422).send(err.message)
    }
    if(err.name === "NotFound"){
        return res.status(404).send(err.message)
    }
    console.log(err)
    res.status(500).send("someting is worong cantact the developer :(")
})


const port: number = Number(process.env.PORT) || 5000
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})