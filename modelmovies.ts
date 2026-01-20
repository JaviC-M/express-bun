import { Database } from "bun:sqlite"

async function initDB() {
    const db = new Database("movies.db")
    const schema: string = await Bun.file("./movies.sql").text()
    db.run(schema)
    const movies = getAllMovies(db)
    if (movies.length === 0){
        const dump: string = await Bun.file("./dump.sql").text()
        db.run(dump)
    }
    return db
}

function getAllMovies(db: Database){
    const query = db.query("SELECT * FROM peliculas")
    return query.all()
}

 const db = await initDB()
 const movies = getAllMovies(db)
 console.log(movies)