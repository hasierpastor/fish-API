const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async function(req, res, next) {
  try {
    const results = await db.query('SELECT * FROM fishes');
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});
