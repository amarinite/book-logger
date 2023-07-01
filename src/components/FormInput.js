export default function FormInput(props) {
  const { label, onChange, id, genre, ...inputProps } = props;

  return (
    <>
      {props.type === "checkbox" ? (
        <span>
          <input type="checkbox" value={genre} onChange={onChange} />
          <label>{genre}</label>
        </span>
      ) : (
        <div className="form-input">
          <label>{label}</label>
          <input {...inputProps} onChange={onChange} />
        </div>
      )}
    </>
  );
}
