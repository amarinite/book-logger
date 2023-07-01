export default function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}
