import books from '../databse/model.js';

const bukuSampahHapus = (request, h) => {
    const { bookId } = request.params;
    const bukuIndex = books.findIndex((book) => book.id === bookId);

    if (bukuIndex === -1) {
        return h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        }).code(404);
    } else {
        books.splice(bukuIndex, 1);
        return h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        }).code(200);
    }
};



export default bukuSampahHapus;
