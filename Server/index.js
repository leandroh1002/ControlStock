    require('dotenv').config();
    const cron = require('node-cron');
    const { PORT, SYNC_FORCE } = process.env;
    const {server,serverSocket,io} = require('./src/app.js');
    const { conn, People } = require('./src/db.js');

    // Función para actualizar la edad
    async function startServer() {
        try {
            await conn.authenticate();
            console.log('Connection successfully established with the database...');

            // Sincronizar el modelo con la base de datos (si es necesario)
            await conn.sync({ alter: SYNC_FORCE });
            console.log(`Server listening at ${PORT}`);
            console.log('Performing maintenance tasks...');

            // Resto de la configuración y rutas de tu servidor
            server.listen(PORT, () => {
                console.log(`Server listening at ${PORT}`);
            });
        } catch (error) {
            console.error('Error starting server!', error);
        }
    }

    startServer();
    