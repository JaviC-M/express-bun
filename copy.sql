DROP TABLE IF EXISTS peliculas;
CREATE TABLE peliculas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    genero TEXT NOT NULL,
    created_at DATATIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO peliculas (nombre, genero) VALUES
('test', 'test'),
('The Matrix', 'Sci-fiction'),
('Evangelion', 'Romantic'),
('Fate', 'Drama');

UPDATE peliculas
SET nombre = 'pelicula', genero = 'generos'
WHERE id=1;

DELETE FROM peliculas
WHERE id=1;
