import books from '../databse/model.js';
import saringanNama from './bonus/name.js';
import dibacaWoi from './bonus/isfinished.js';
import sudahSelesaiKah from './bonus/reading.js';

// listSemuaBukuHandler.js
const listSemuaBukuHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    let filteredBooks = books;
    // Apply filters
    filteredBooks = saringanNama(filteredBooks, name);
    filteredBooks = dibacaWoi(filteredBooks, reading);
    filteredBooks = sudahSelesaiKah(filteredBooks, finished);

    const ListBuku = filteredBooks.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
    }));
    console.log(books)

    return h.response({
        status: 'success',
        data: {
            books: ListBuku
        }
    }).code(200);
    
};

export default listSemuaBukuHandler;
