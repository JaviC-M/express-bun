import { Database } from "bun:sqlite"

export function getAllMovies(db: Database){
    const query = db.query("SELECT * FROM peliculas")
    return query.all()
}