const myLibrary = [];

/// the constructor
function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;

    // generate random id for each created book
    this.id = function () {
        return crypto.randomUUID();
    }
}

/// take params, create book then store it in the array
function addBookToLibrary(name, author, genre="Not specified") {
    if (!name || !author) {
        alert("Please enter a valid name/author!");
        return;
    }
    // Create new book
    const newBook = new Book(name, author, genre);

    // Add new book to the array
    myLibrary.push(newBook);
}

/**
 * Print the library to the user
 */
function displayLibrary(myLibrary) {
    // Get control of the books ul element
    const books = document.querySelector("#books");

    // Clear for new display
    books.innerHTML = '';

    // read the myLibrary array
        // add each book in the array as a <li> element
    for (const book of myLibrary) {
        const li = document.createElement("li");
        li.textContent = `${book.name} --- ${book.author} --- ${book.genre}`;
        books.append(li);
    }
}

// Selectors for button and form
const newBookBtn = document.querySelector("#newBookBtn");
const newBookForm = document.querySelector("#newBookForm");

// New Book Button clicked
newBookBtn.addEventListener("click", () => {
    newBookForm.hidden = false;
    newBookForm.querySelector("input").focus();
});

// Submit button on form clicked
newBookForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // get written data
    const data = new FormData(newBookForm);

    // retrieved values from the form
    const name = data.get("name");
    const author = data.get("author");
    const genre = data.get("genre") || undefined;

    // add to array
    addBookToLibrary(name, author, genre);

    // display list
    displayLibrary(myLibrary);

    // reset input fields, hide form
    newBookForm.reset();
    newBookForm.hidden = true;
});
