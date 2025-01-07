const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true }
});

const serverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  map: { type: String, required: true },
  mode: { type: String, required: true },
  region: { type: String, required: true },
  players: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },
  playersList: [playerSchema]
});

const ServerInfo = mongoose.model('ServerInfo', serverSchema);

module.exports = ServerInfo;