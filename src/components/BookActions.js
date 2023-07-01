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
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function assignDate(date) {
    const day = new Date(date).getDate();
    const month = months[new Date(date).getMonth()];
    return month + " " + day;
  }

  return (
    <li className="book">
      <img src={book.url} alt={book.name} />
      <div className="book-info">
        <h2>{book.name}</h2>
        <p>{book.author}</p>
      </div>
      <p>{book.genres.join(", ")}</p>
      <p>Started {assignDate(book.dateStarted)}</p>
      <p>Finished {assignDate(book.dateFinished)}</p>
      <p>❌</p>
    </li>
  );
}

export default BookList;
