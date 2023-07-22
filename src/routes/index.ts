import {Router} from "express";
import store from "./store";

const router = Router();

router.get('/', (req, res) => {
  res.json({
    routes: [
      'products'
      ]
  })
});

router.use('/store', store);

export default router;
