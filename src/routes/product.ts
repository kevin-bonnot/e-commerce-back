import {Router} from "express";
import pool from "../db";

const router = Router();

router.get('/', (req: any, res) => {
  const storeId = Number(req.storeId);
  if (!storeId) {
    res.status(404).json({error: 'Not found'});
    return;
  }
  pool.query(`select * from product where store = ${storeId}`, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({error: 'Erreur'});
    } else {
      res.json(result.rows);
    }
  });
});

export default router;