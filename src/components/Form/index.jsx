import { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();

    if (type === "saída") {
      setListTransactions([
        ...listTransactions,
        { description, type, value: -value },
      ]);
    } else if (type === "entrada") {
      setListTransactions([...listTransactions, { description, type, value }]);
    }
    setDescription("");
    setType("entrada");
    setValue("");
  };

  return (
    <div className="div-Form">
      <form onSubmit={addTransaction}>
        <Input
          value={description}
          title="Descrição"
          type="text"
          name="description"
          id="description"
          placeholder="Digite aqui a sua descrição"
          helpText="Ex: Compra de roupas"
          func={setDescription}
        />

        <div className="div-Inputs">
          <Input
            value={value}
            title="Valor"
            type="number"
            name="value"
            id="value"
            placeholder="1"
            helpText=""
            className="inputValue"
            func={setValue}
          />
          <Select
            title="Tipo de valor"
            name="type"
            id="type"
            value={type}
            func={setType}
          />
        </div>
        <button button="button" className="button-Inserir">
          Inserir valor
        </button>
      </form>
    </div>
  );
};
