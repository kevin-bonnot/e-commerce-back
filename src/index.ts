import express from "express";
import 'dotenv/config';
import routes from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send({coucou: 'coucou'});
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
