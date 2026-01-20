Nos traemos el csv, creamos una tabla temporal donde metemos todo el csv temporalmente

# 1.Traernos csv ejercicio incial

Usando `cp ~`

# Borramos base de datos

E inciamos con sqlite3: `sqlite3 movies.db < schema.sql`

`sqlite3 movies.db`

`.mode csv`
`.import movies.csv temp` importar el csv y moverlo en una tabla segun como se llama en cada caso
`select * from movies` Comprobar que este vacio
`select * from temp LIMIT 10;` Deberiamos de tener las 10 primeras filas de nuestro csv
`.fullschema` Mirar el esquema entero de la tabla
`INSERT INTO movies (title, genres) SELECT title, genres FROM temp;`
`select * from movies LIMIT 10;` Despues de comprobar esto control c y salimos del csv mode
`sqlite3 movies.db ".dump" > dump.sql`
Borramos todos las cosas que no sean inserts del dummy y nos quedamos SOLO con los inserts
`despues puedes borrar el csv cuando este el insert
`rm archivo.csv`

