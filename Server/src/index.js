const { server } = require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection');

server.listen(PORT, async () => {
    console.log(`Raised on port: ${PORT}`);
    await conn.sync({ force: true }); 
  });