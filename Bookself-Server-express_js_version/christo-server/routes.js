import express from 'express';
import tambahBuku from "./crud/insertBook.js"
import listSemuaBuku from './crud/get.js';
import getDetailwithIdBuku from './crud/buku_get_detail.js';
import ngubahBuku from "./crud/changeBook.js"
import bukuSampahHapus from "./crud/trashBook.js"

const bookRoutes = express.Router();

bookRoutes.post('/', tambahBuku);
bookRoutes.get("/", listSemuaBuku)
bookRoutes.get("/:bookId", getDetailwithIdBuku)
bookRoutes.put("/:bookId", ngubahBuku)
bookRoutes.delete("/:bookId", bukuSampahHapus)

export default bookRoutes;
