const { pool } = require("../db");

//obtener los registros
const getRepertorio = async (req, res) => {
  try {
    const result = await pool.query("select * from canciones");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al encontrar registro");
  }
};

//ingresar registros
const createRepertorio = async (req, res) => {
  try {
    const { titulo, artista, tono } = req.body;
    const values = [titulo, artista, tono];
    let queryRepertorio =
      "insert into canciones (titulo, artista, tono) values ($1, $2, $3) returning *";
    const result = await pool.query(queryRepertorio, values);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error al ingresar registro");
  }
};

//editar registros
const editRepertorio = async (req, res) => {
  try {
    const { titulo, artista, tono } = req.body;
    const { id } = req.query;
    const values = [titulo, artista, tono, id];
    const queryCanciones =
      "update canciones set titulo = $1, artista =$2, tono = $3 where id = $4 returning *";
    const result = await pool.query(queryCanciones, values);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error al modificar registro");
  }
};

//eliminar registros
const deleteRepertorio = async (req, res) => {
  try {
    const { id } = req.query;
    const values = [id];
    const queryEliminar = "delete from canciones where id = $1 returning *";
    const result = await pool.query(queryEliminar, values);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error al eliminar registro");
  }
};

module.exports = {
  getRepertorio,
  createRepertorio,
  editRepertorio,
  deleteRepertorio,
};
