import {Router} from "express";
import client from "../db";

const router = Router();

router.get('/', (req: any, res) => {
  const storeId = Number(req.storeId);
  if (!storeId) {
    res.status(404).json({error: 'Not found'});
    return;
  }
  client.query(`select id, name, description, price, stock, image from product where store = ${storeId} and is_active=true`, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({error: err});
    } else {
      res.json(result.rows);
    }
  });
});

export default router;