import { Database } from "bun:sqlite"

export function getMovies(db: Database, filters: {nombre: string | undefined, genero: string | undefined }){
    const { nombre, genero } = filters
    let movies
    if(nombre && genero) movies = getMoviesByTituloAndGenero(db, nombre, genero)
        else if(nombre) movies = getAllTitulos(db, nombre)
        else if(genero) movies = getMoviesByGenero(db, genero)
        else movies = getAllMovies(db)
    return movies
} 

export function getAllMovies(db: Database){
    const query = db.query("SELECT * FROM peliculas")
    return query.all()
}

export function  getMovieById(db: Database, id: number){
    const query = db.query("SELECT * FROM peliculas WHERE id = ?")
    return query.get(id)
}

export function getAllTitulos(db: Database, nombre: string){
    const query = db.query("SELECT * FROM peliculas WHERE nombre LIKE ?")
    return query.all(`%${nombre}%`)
}

export function getMoviesByGenero(db: Database, genero: string) {
    const query = db.query("SELECT * FROM peliculas WHERE genero LIKE ?")
    return query.all(`%${genero}%`)
}

export function getMoviesByTituloAndGenero(db: Database, titulo: string, genero: string) {
    const query = db.query("SELECT * FROM peliculas WHERE nombre LIKE ? AND genero LIKE ?")
    return query.all(`%${titulo}%`, `%${genero}%`)
}