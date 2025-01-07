const mongoose = require('mongoose');

const serverSettingsSchema = new mongoose.Schema({
    "rating":{
      type: Number,
      default: 1374
    },
    "region": "string",
    "ping": "number",
    "tickrate": "string",
    "players": {
      "current": "number",
      "max": "number"
    },
    "punkbuster": "boolean",
    "fairfight": "boolean",
    "password": "boolean",
    "preset": "string",
    "advanced": {
      "minimap": "boolean",
      "onlySquadLeaderSpawn": "boolean",
      "vehicles": "boolean",
      "teamBalance": "boolean",
      "minimapSpotting": "boolean",
      "hud": "boolean",
      "3pVehicleCam": "boolean",
      "killCam": "boolean",
      "regenerativeHealth": "boolean",
      "friendlyFire": "boolean",
      "3dSpotting": "boolean",
      "enemyNameTags": "boolean"
    },
    "rules": {
      "tickets": "number",
      "vehicleSpawnDelay": "number",
      "bulletDamage": "number",
      "kickAfterTeamKills": "number",
      "playerHealth": "number",
      "playerRespawnTime": "number",
      "kickAfterIdle": "number",
      "banAfterKicks": "number"
    }
});

module.exports = mongoose.model("SettingsSchema", serverSettingsSchema);
  