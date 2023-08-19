// import express router
const router = require("express").Router();
// import modular routers
const apiRoutes = require("./api");
// api endpoint
router.use("/api", apiRoutes);
// endpoint for wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
