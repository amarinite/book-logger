import { useState } from "react";
import FormInput from "./FormInput";

export default function LogModal({ onLogModal, onLogBook }) {
  const [values, setValues] = useState({
    name: "",
    author: "",
    url: "",
    genres: ["horror", "sci-fi"],
    dateStarted: "",
    dateFinished: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter title...",
      label: "Title",
      required: true,
    },
    {
      id: 2,
      name: "author",
      type: "text",
      placeholder: "Enter author...",
      label: "Author",
      required: true,
    },
    {
      id: 3,
      name: "url",
      type: "text",
      placeholder: "Enter image url...",
      label: "Image url",
      required: true,
    },
    {
      id: 5,
      name: "dateStarted",
      type: "date",
      label: "Date started",
      required: true,
    },
    {
      id: 6,
      name: "dateFinished",
      type: "date",
      label: "Date finished",
      required: true,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newBook = {
      ...values,
      id,
    };

    onLogBook(newBook);
  }

  //   function handleChange(e) {
  //     const { value, checked } = e.target;

  //     if (checked) {
  //       setGenres((prevGenres) => [...prevGenres, value]);
  //     } else {
  //       setGenres((prevGenres) => {
  //         return [...prevGenres.filter((g) => g !== value)];
  //       });
  //     }
  //   }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onChangeChecked(e) {}

  return (
    <>
      <form className="log-form" onSubmit={handleSubmit}>
        <h2>Log a new book!</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <fieldset>
          {for later https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/}
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
        </fieldset> */}
        <button className="button">Log it!</button>
      </form>
      <div className="log-form-overlay" onClick={onLogModal}></div>
    </>
  );
}
