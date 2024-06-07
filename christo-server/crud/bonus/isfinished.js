function dibacaWoi(books, reading) {
    if (reading === undefined) return books; else{
    const isReading = reading === '1';
    return books.filter(book => book.reading === isReading);
  }
}
  
export default dibacaWoi;
  