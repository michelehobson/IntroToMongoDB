import express from 'express';
import db from '../db/conn.mjs';

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("restaurants");
    let results = await collection.find({}).limit(50).toArray();
    res.send(results).status(200);
  });

export default router;