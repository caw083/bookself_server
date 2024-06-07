const sudahSelesaiKah = (books, reading) => {
    if (reading === undefined) return books;
    const isReading = reading === '1';
    return books.filter(book => book.reading === isReading);
  };
  
  export default sudahSelesaiKah;
  