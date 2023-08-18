const express = require('express');
// const cors = require('cors');
const clientRouter = require('./api/Routes/client.routes');

const app = express();
app.use(express.json());
// app.use(cors());

app.get('/health', (_req, res) => res.status(200).end());
app.use(clientRouter);

module.exports = app;
