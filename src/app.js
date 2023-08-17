const express = require('express');

const app = express();
app.use(express.json());
app.get('/health', (_req, res) => res.status(200).end());

module.exports = app;
