const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes"); //para todas las rutas
const app = express();

//middlewares para aceptar json
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//para aceptar peticiones
app.use(cors());

//ruta html
app.get("/", (req, res) => {
  try {
    res.sendFile("index.html");
  } catch (error) {
    console.error(error.message);
  }
});

//endpoints
app.use("/", routes);

module.exports = app;
