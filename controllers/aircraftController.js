const express = require("express");
const router = express.Router();

const AircraftModel = require("../models").Aircraft;

// GET USERS PROFILE
router.get("/:registration", async (req, res) => {
  let aircraft = await AircraftModel.findAll({
    where: { registration: req.params.registration },
  });
  res.json({ aircraft });
});

module.exports = router;
