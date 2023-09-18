import { Router } from "express";
import gameRouter from "./game.routes";

const router = Router()
router.use(gameRouter)
export default router
