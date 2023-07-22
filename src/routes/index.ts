import {Router} from "express";

const router = Router();

router.get('/', (req, res) => {
  res.json({
    routes: [
      'products'
      ]
  })
});

export default router;
