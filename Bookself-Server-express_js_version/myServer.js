import express from 'express';
import bookRoutes from "./christo-server/routes.js"
const bookServer = express();
const require_PORT = 9000;

// Route to respond with "Test Kriteria 1" and check the port
bookServer.get('/', (req, res) => {
    if (require_PORT === 9000) {
        res.send('Kriteria 1 : Aplikasi menggunakan port 9000. Sudah Terpenuhi di PORT ' + require_PORT);
    } else {
        res.send('Kriteria 1 : Aplikasi menggunakan port 9000. Belum Terpenuhi server masih menggunakan port ' + require_PORT);
    }
});

bookServer.use(express.json());
bookServer.use('/books', bookRoutes);


bookServer.listen(require_PORT, () => {
  console.log(`Server is running on port ${require_PORT}`);
});
