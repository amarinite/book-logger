import { useState } from "react";
import FormInput from "./FormInput";

export default function LogModal({ onLogModal, onLogBook }) {
  const [values, setValues] = useState({
    name: "",
    author: "",
    url: "",
    genres: [],
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

  const possibleGenres = [
    "fantasy",
    "sci-fi",
    "contemporary",
    "horror",
    "classic",
    "non-fiction",
    "historic",
    "poetry",
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

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onChangeChecked(e) {
    const { value, checked } = e.target;

    if (checked) {
      setValues({ ...values, genres: [...values.genres, value] });
      console.log(values);
    } else {
      setValues({
        ...values,
        genres: [...values.genres.filter((g) => g !== value)],
      });
      console.log(values);
    }
  }

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
        <fieldset>
          <legend>
            Genres <span>(please select a maximum of 3)</span>
          </legend>
          {possibleGenres.map((genre) => (
            <FormInput
              type="checkbox"
              genre={genre}
              key={genre}
              onChange={onChangeChecked}
            />
          ))}
        </fieldset>

        <button className="button">Log it!</button>
      </form>
      <div className="log-form-overlay" onClick={onLogModal}></div>
    </>
  );
}
