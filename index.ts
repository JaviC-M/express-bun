import { initDB } from "./db/init";
import { getAllMovies, getAllTitulos, getMovieById } from "./models/movies";
import express from "express"
import type { Request, Response, NextFunction } from "express"
const app = express();
const PORT = 3000
const db = await initDB();

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, new Date().toISOString)
    if(req.method === "GET") {
        console.log(req.query)
    }
    next()
}

app.use(logMiddleware)

app.get("/movies", (req, res) => {
    const nombre = req.query.title
    if (nombre) {
    console.log("Estoy dentro del endpoint",nombre)
    const peli = getAllTitulos(db,nombre)
    res.json(peli)
    }
    else {
        const peli = getAllMovies(db)
        res.json(peli)
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en puerto ${PORT}`)
})


