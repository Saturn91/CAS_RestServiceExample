import Datastore from 'nedb';

const db = new Datastore({filename: './data/book.db', autoload: true});

class BookStore {
    addBook(req, res) {
        db.insert({title: req.query.book});
        bookStore.displayAllBooksAsHtml(res)
    }

    getBooks(req, res) {
        bookStore.displayAllBooksAsHtml(res)
    }

    displayAllBooksAsHtml(res) {
        db.find({}, (err, entries) => {
            let bookList = [];
            entries.forEach(book => {
                bookList.push(book.title);
            });
            if (bookList.length > 0) {
                let output = '';
                bookList.forEach(title => {
                    output += title + '<br>';
                });
                res.send(output);
            }
        });
    }
}

export const bookStore = new BookStore();
