import { Pool } from 'pg';

const createConnection = async () => {
   const client = new Pool({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   });

   await client.connect();

   return client;
}

export { createConnection }