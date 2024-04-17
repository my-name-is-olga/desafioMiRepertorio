const { Router } = require("express");
const router = Router();
const repertorioRoutes = require("./repertorio.routes");

//endpoints
router.use("/", repertorioRoutes);

module.exports = router;
