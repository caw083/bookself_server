const saringanNama = (books, name) => {
    if (!name) return books;
    else {
        return books.filter(
            book => book.name.toLowerCase().includes(name.toLowerCase())
        );
    }
  };
  
export default saringanNama;
  