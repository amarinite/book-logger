export default function Footer({ books }) {
  return (
    <footer className="footer">
      You have read {books.length} books so far!
    </footer>
  );
}
