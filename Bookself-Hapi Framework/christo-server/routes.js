// routes.js
import tambahBuku from "./crud/insertBook.js";
import listSemuaBuku from './crud/get.js';
import getDetailwithIdBuku from './crud/buku_get_detail.js';
import ngubahBuku from "./crud/changeBook.js";
import bukuSampahHapus from "./crud/trashBook.js";

const bookRoutes = [
    {
        method: 'POST',
        path: '/books',
        handler: tambahBuku
    },
    {
        method: 'GET',
        path: '/books',
        handler: listSemuaBuku
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailwithIdBuku
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: ngubahBuku
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: bukuSampahHapus
    }
];

export default bookRoutes;
