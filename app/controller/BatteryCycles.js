const express = require('express');
const Cycle = require('../repository/cycle');

const app = express();

app.post('/payload', async (req, res) => {
	await Cycle.create({payload:req.body});
	res.status(204).send()
})

module.exports = app;