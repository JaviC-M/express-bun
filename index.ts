import { initDB } from "./db/init";
import { getAllMovies, getAllTitulos, getMovieById } from "./models/movies";

const db = await initDB()

//const peliculass = getAllMovies(db)
//console.log(peliculass)

//const peliculaId = getMovieById(db, 1)
//console.log(peliculaId)

const peliculaTitulo = getAllTitulos(db, "Toy")
console.log(peliculaTitulo)