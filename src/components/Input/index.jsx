import "./style.css";

const Input = ({
  value,
  title,
  type,
  name,
  id,
  placeholder,
  helpText,
  func,
}) => {
  const verifyType = (type, event) => {
    if (type === "number") {
      func(parseInt(event.target.value));
    } else {
      func(event.target.value);
    }
  };
  return (
    <div className="input">
      <label htmlFor={name} title={title}>
        {title}
      </label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={(event) => verifyType(type, event)}
        required
      />
      <span>{helpText}</span>
    </div>
  );
};

export default Input;
