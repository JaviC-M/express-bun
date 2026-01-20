import { Database } from "bun:sqlite"
const schema = await Bun.file("./movies.sql").text()

const db = new Database("movies.db")
db.run(schema)

const select = db.query("SELECT * FROM peliculas")
console.log(select.all())
