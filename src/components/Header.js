export default function Header({ onLogModal }) {
  return (
    <header className="header">
      <h1>Book Tracker</h1>
      <button className="button" onClick={onLogModal}>
        Log new book
      </button>
    </header>
  );
}
