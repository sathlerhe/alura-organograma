import "./style.css";

const Input = ({
  label,
  placeholder,
  required = false,
  name,
  value,
  setValue,
  type = 'text',
}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  );
};

export default Input;
