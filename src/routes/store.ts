import {Router} from "express";
import client from "../db";
import product from "./product";

const router = Router();

router.get('/', (req, res) => {
  client.query('select * from store', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({error: err});
    } else {
      res.json(result.rows);
    }
  });
});

router.get('/:storeId', (req, res) => {
  const storeId = Number(req.params.storeId);
  if (!storeId) {
    res.status(404).json({error: 'Not found'});
    return;
  }
  client.query(`select * from store where store.id = ${storeId}`, (err, result) => {
    if (err) {
      res.status(500).json({error: err});
    } else if (result.rowCount === 0) {
      res.status(404).json({error: 'Not found'});
    } else {
      res.json(result.rows[0]);
    }
  });
});

router.use('/:storeId/product', (req: any, res, next) => {
  req.storeId = req.params.storeId;
  product(req, res, next);
});

export default router;
