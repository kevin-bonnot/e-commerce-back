import {Client} from "pg";

const client = new Client(process.env.PG_URL);

export default client;