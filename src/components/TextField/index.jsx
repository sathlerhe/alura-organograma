import "./style.css";

const TextField = ({ label, placeholder, required, name, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  );
};

export default TextField;
