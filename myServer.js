// index.js (or any other main server file)
import Hapi from '@hapi/hapi';
import bookRoutes from './christo-server/routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost'
    });

    // Route to respond with "Test Kriteria 1" and check the port
    server.route({
        method: 'GET',
        path: '/',
        handler: () => {
            if (server.info.port === 9000) {
                return 'Kriteria 1 : Aplikasi menggunakan port 9000. Sudah Terpenuhi di PORT ' + server.info.port;
            } else {
                return 'Kriteria 1 : Aplikasi menggunakan port 9000. Belum Terpenuhi server masih menggunakan port ' + server.info.port;
            }
        }
    });

    server.route(bookRoutes);

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
