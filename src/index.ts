import http from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`server is listening on port http://localhost:${process.env.PORT}`);
});

export default server;