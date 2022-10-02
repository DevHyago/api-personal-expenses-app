import path from 'path';
import fs from 'fs';

import { createConnection } from './connection';

(async () => {

   const client = await createConnection();
   const fileDatabaseDir = path.join(__dirname, 'migrations');

   console.log('Start migrations ', new Date());

   fs.readdir(fileDatabaseDir, (error, files) => {
      if(error){
         console.log(error);
      }
      files.forEach(file => {
         fs.readFile(path.join(fileDatabaseDir, file), async (error, content) => {
            if(error){
               console.error(error);
            }
            const runMigrationsQuery = content.toString();

            await client.query(runMigrationsQuery);
         });
      });

   });

   console.log('Finish migrations ', new Date());

})();