const { Router } = require("express");
const router = Router();
const { pool } = require("../db");
const {
  getRepertorio,
  createRepertorio,
  editRepertorio,
  deleteRepertorio,
} = require("../controllers/repertorio.controllers.js");

//ruta consulta
router.get("/canciones", getRepertorio);

//ruta crear
router.post("/agregar", createRepertorio);

//ruta editar
router.put("/editar", editRepertorio);

//ruta eliminar
router.delete("/borrar", deleteRepertorio);

module.exports = router;
