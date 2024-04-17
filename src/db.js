const pg = require("pg");
const {Pool} = pg;

//variables de entorno
const userDb = "postgres";
const passDb = "1234";
const hostDb = "localhost";
const portDb = "5432";
const nameDb = "repertorio";

//conexión base de datos
const pool = new Pool({
    connectionString: `postgres://${userDb}:${passDb}@${hostDb}:${portDb}/${nameDb}`,
});

//exportar pool
module.exports = {pool};