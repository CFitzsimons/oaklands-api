const express = require('express');

const router = express.Router();

const players = require('../../services/players');

router.get('/players', async (req, res) => {
  const serverPlayers = await players.findAll();
  res.json(serverPlayers);
});

module.exports = router;
