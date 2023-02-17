import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import "./style.css";

interface IInput {
  label: string;
  placeholder: string;
  required?: boolean;
  name: string;
  value: any;
  setValue: (value: any) => void;
  type?: HTMLInputTypeAttribute;
}
const Input: React.FC<IInput> = ({
  label,
  placeholder,
  required = false,
  name,
  value,
  setValue,
  type = "text",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
