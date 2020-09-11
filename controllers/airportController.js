const express = require("express");
const router = express.Router();
const RunwayModel = require("../models").Runway;
const AirportModel = require("../models").Airport;

// GET USERS PROFILE

// router.get("/runways", async (req, res) => {
//   let runways = await RunwayModel.findAll();
//   res.json({ runways });
// });
router.get("/:ident", async (req, res) => {
  let airport = await AirportModel.findAll(
    { where: { ident: req.params.ident } }
    // {
    //   include: { model: RunwayModel },
    //   attributes: ["designator"],
    // }
  );
  let runways = await RunwayModel.findAll({
    where: { airportid: airport[0].globalid },
  });
  console.log(runways[0].dataValues);
  airport[0]["runways"] = runways;
  res.json({ airport: airport[0], runways });
});

module.exports = router;
