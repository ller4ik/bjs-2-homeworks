// Ex 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this._state *= 1.5;
        if (this._state > 100) {
            this._state = 100;
        }
    }

    set state(statusNew) {
        if (statusNew < 0) {
            this._state = 0;
        }
        if (statusNew > 100) {
            this._state = 100;
        } else {
            return this._state = statusNew;
        }
    }

    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
};

//Ex 2


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if (findBook == undefined) {
            return null;
        } else {
            return findBook;
        }
    }

    giveBookByName(bookName) {
        let findBook = this.books.find(item => item.name === bookName);
        if (findBook) {
            this.books.splice(findBook, 1);
            return findBook;
        } else {
            return null;
        }
    }
};