import { useState } from "react";
import initialBooks from "./initialData";
import Header from "./components/Header";
import LogModal from "./components/LogModal";
import BookList from "./components/BookActions";
import Footer from "./components/Footer";

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

export default App;
