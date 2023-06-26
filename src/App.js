const initialBooks = [
  {
    id: 2571547,
    name: "",
    author: "",
    url: "",
    isFavorite: true,
  },
  {
    id: 1261561,
    name: "",
    author: "",
    url: "",
    isFavorite: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <BookList />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Book Tracker</h1>
      <button className="button">Log new book</button>
    </header>
  );
}

function BookList() {
  return (
    <main>
      <p>I am a book</p>
    </main>
  );
}

export default App;
