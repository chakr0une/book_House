import { getAllBooks } from "../lib/fake-data";
import BookList from "../component/books/BookList";

const BookListePage = () => {
    const books = getAllBooks();
    console.log(books);
    return (
        <BookList books = {books} />
    )
}

export default BookListePage