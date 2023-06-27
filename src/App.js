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

  function handleLogBook(loggedBook) {
    setBooks([...books, loggedBook]);
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
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [genres, setGenres] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newBook = {
      id,
      name,
      author,
      url,
      genres,
      started: "12 Jun",
      finished: "24 Jun",
    };

    console.log(newBook);

    onLogBook(newBook);
  }

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setGenres((prevGenres) => [...prevGenres, value]);
    } else {
      setGenres((prevGenres) => {
        return [...prevGenres.filter((g) => g !== value)];
      });
    }
  }

  return (
    <>
      <form className="log-form" onSubmit={handleSubmit}>
        <h2>Log a new book!</h2>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a title..."
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter a title..."
          />
        </div>
        <div>
          <label>Cover image</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter an image url..."
          />
        </div>
        <fieldset>
          {/* for later https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */}
          <legend>
            Genres <span>(please select a maximum of 3)</span>
          </legend>
          <input type="checkbox" value="fantasy" onChange={handleChange} />
          Fantasy
          <input type="checkbox" value="horror" onChange={handleChange} />
          Horror
          <input type="checkbox" value="sci-fi" onChange={handleChange} />
          Sci-fi
          <input type="checkbox" value="contemporary" onChange={handleChange} />
          Contemporary
          <input type="checkbox" value="non-fiction" onChange={handleChange} />
          Non-fiction
          <input type="checkbox" value="classic" onChange={handleChange} />
          Classic
          <input type="checkbox" value="historic" onChange={handleChange} />
          Historic
        </fieldset>
        <div>
          <label>Started</label>
          <input type="date" />
          <label>Finished</label>
          <input type="date" />
        </div>
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
