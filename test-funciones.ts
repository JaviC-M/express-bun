import {initDB} from "./db/init"
import { Database } from "bun:sqlite"
import { getMoviesByGenero,getMoviesByTituloAndGenero } from "./models/movies"

const db: Database = await initDB()
const m1 = getMoviesByTituloAndGenero(db, "hola", "action")
console.log(m1)