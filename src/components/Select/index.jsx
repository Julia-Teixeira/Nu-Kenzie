import "./style.css";

const Select = ({ title, name, id, value, func }) => {
  return (
    <div className="select">
      <label htmlFor={name} title={title}>
        {title}
      </label>
      <select
        name={name}
        id={id}
        required
        value={value}
        onChange={(event) => func(event.target.value)}
      >
        <option className="select-items" value="entrada">
          Entrada
        </option>
        <option className="select-items" value="saída">
          Saída
        </option>
      </select>
    </div>
  );
};

export default Select;
