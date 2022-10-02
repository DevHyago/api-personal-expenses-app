import 'dotenv/config';
import { app } from './app';
import './database/runMigrations';

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));