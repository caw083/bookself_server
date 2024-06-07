import books from  '../databse/model.js'
import saringanNama from './bonus/name.js';
import dibacaWoi from './bonus/isfinished.js';
import sudahSelesaiKah from './bonus/reading.js';

function listSemuaBuku(request, response) {
  const { name, reading, finished } = request.query;

  let filteredBooks = books;
  filteredBooks = saringanNama(filteredBooks, name);
  filteredBooks = dibacaWoi(filteredBooks, reading);
  filteredBooks = sudahSelesaiKah(filteredBooks, finished);

    
  const ListBuku = filteredBooks.map(book => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher
    }));


  
    response.status(200).json({
      status: 'success',
      data: {
        books: ListBuku
      }
    });
  }

export default listSemuaBuku;