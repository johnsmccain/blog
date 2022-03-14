import "./input.css";
const Input = ({ text, placeholder, forHtml, forLabel }) => {
  return (
    <div className="input">
      <label htmlFor={forHtml}>{forLabel}</label>
      <input id={forHtml} type={text} placeholder={placeholder} required />
    </div>
  );
};

export default Input;
