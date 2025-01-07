const express = require("express");
const router = express.Router();
const serverSettings = require("../models/serverSettings.models");

router.post("/server-settings", async (req, res) => {
  try {
    const Settings = new serverSettings(req.body);
    await Settings.save();
    res.status(201).json(Settings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



router.get("/server-settings", async (req, res) => {
  try {
    const settings = await serverSettings.findOne();
    if (!settings) {
      return res.status(404).json({ error: "Server info not found" });
    }
    res.status(200).send(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/server-settings/:id", async (req, res) => {
  try {
    const settings = await serverSettings.findOne({ _id: req.params.id });
    if (!settings) {
      return res.status(404).json({ error: "Server info not found" });
    }
    res.status(200).send(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
