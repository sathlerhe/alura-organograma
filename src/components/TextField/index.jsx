import "./style.css";

const TextField = ({ label, placeholder }) => {
  return (
    <div className="text-field">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextField;
