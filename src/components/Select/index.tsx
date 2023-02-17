import "./style.css";

interface ISelect {
  label: string;
  items: {
    id: string;
    name: string;
    primaryColor: string;
  }[];
  required: boolean;
  name: string;
  value: any;
  setValue: (value: any) => void;
}
const Select: React.FC<ISelect> = ({
  label,
  items,
  required,
  name,
  value,
  setValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="select-list">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={handleChange}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
