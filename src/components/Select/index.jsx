import "./style.css";

const Select = ({ label, items }) => {
  return (
    <div className="select-list">
      <label>{label}</label>
      <select>
        {items?.map((item) => (
          <option value="" key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
