import { initDB } from "./db/init";
import { getAllMovies, getAllTitulos, getMovieById } from "./models/movies";
import express from "express"
const app = express();
const PORT = 3000

const db = await initDB();
app.get("/movies", (req, res) => {
    const peli = getAllMovies(db)
    res.json(peli)
})

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en puerto ${PORT}`)
})

