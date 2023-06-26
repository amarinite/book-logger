import { useState } from "react";

const initialBooks = [
  {
    id: 2571547,
    name: "Mare",
    author: "Isabel Del Río",
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666256795i/63045399.jpg",
    genres: ["science-fiction", "horror"],
    started: "12 Jun",
    finished: "24 Jun",
  },
  {
    id: 1261561,
    name: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607462569i/53152636.jpg",
    genres: ["horror"],
    started: "12 Jun",
    finished: "24 Jun",
  },
  {
    id: 2143235,
    name: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
    genres: ["contemporary"],
    started: "12 Jun",
    finished: "24 Jun",
  },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [showLogModal, setShowAddModal] = useState(false);

  function handleLogModal() {
    setShowAddModal((show) => !show);
  }

  function handleLogBook() {
    setShowAddModal((show) => !show);
  }

  return (
    <div className="app">
      <Header onLogModal={handleLogModal} />
      {showLogModal && (
        <LogModal onLogModal={handleLogModal} onLogBook={handleLogBook} />
      )}
      <BookList books={books} />
      <Footer books={books} />
    </div>
  );
}

function Header({ onLogModal }) {
  return (
    <header className="header">
      <h1>Book Tracker</h1>
      <button className="button" onClick={onLogModal}>
        Log new book
      </button>
    </header>
  );
}

function LogModal({ onLogModal, onLogBook }) {
  return (
    <>
      <form className="log-form" onSubmit={onLogBook}>
        <h2>Log a new book!</h2>
        <div>
          <label>Title</label>
          <input type="text" placeholder="Enter a title..." />
        </div>
        <div>
          <label>Author</label>
          <input type="text" placeholder="Enter a title..." />
        </div>
        <fieldset>
          <legend>
            Genres <span>(please select a maximum of 3)</span>
          </legend>
          <input type="checkbox" />
          <label>Fantasy</label>
          <input type="checkbox" />
          <label>Horror</label>
          <input type="checkbox" />
          <label>Sci-fi</label>
          <input type="checkbox" />
          <label>Contemporary</label>
          <input type="checkbox" />
          <label>Non-fiction</label>
          <input type="checkbox" />
          <label>Classic</label>
          <input type="checkbox" />
          <label>Historic</label>
        </fieldset>
        <button className="button">Log it!</button>
      </form>
      <div className="log-form-overlay" onClick={onLogModal}></div>
    </>
  );
}

function BookList({ books }) {
  return (
    <main>
      <ul className="book-list">
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </main>
  );
}

function Book({ book }) {
  return (
    <li className="book">
      <img src={book.url} alt={book.name} />
      <div className="book-info">
        <h2>{book.name}</h2>
        <p>{book.author}</p>
      </div>
      <p>{book.genres.join(", ")}</p>
      <p>Started {book.started}</p>
      <p>Finished {book.finished}</p>
      <p>❌</p>
    </li>
  );
}

function Footer({ books }) {
  return (
    <footer className="footer">
      You have read {books.length} books so far!
    </footer>
  );
}

export default App;
