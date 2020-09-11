const express = require("express");
const router = express.Router();

const AirportModel = require("../models").Airport;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let airport = await AirportModel.findByPk(req.params.id);
  res.json({ airport });
});

module.exports = router;
