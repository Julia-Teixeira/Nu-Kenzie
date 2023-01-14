import { useState } from "react";
import { Card } from "../Card";
import "./style.css";

export const List = ({ setListTransactions, listTransactions }) => {
  const isSelected = "isSelected";
  const isNotSelected = "";

  let classNameTodos = isSelected;
  let classNameEntrada = isNotSelected;
  let classNameSaida = isNotSelected;

  const [filter, setFilter] = useState("todos");

  const filteredList = listTransactions.filter((item) => {
    if (filter === "todos") {
      classNameTodos = isSelected;
      classNameEntrada = isNotSelected;
      classNameSaida = isNotSelected;
      return true;
    } else if (filter === "entrada") {
      classNameTodos = isNotSelected;
      classNameEntrada = isSelected;
      classNameSaida = isNotSelected;
      return item.type === filter;
    } else if (filter === "saída") {
      classNameTodos = isNotSelected;
      classNameEntrada = isNotSelected;
      classNameSaida = isSelected;
      return item.type === filter;
    }
  });

  const filtered = (type) => {
    setFilter(type);
  };

  let classNameDisplpay = "no-transaction";
  if (listTransactions.length > 0) {
    classNameDisplpay = "no-transaction display-none";
  } else {
    classNameDisplpay = "no-transaction";
  }

  return (
    <section className="section-List">
      <div className="header-List">
        <h2>Resumo financeiro</h2>
        <nav>
          <button
            type="button"
            className={classNameTodos}
            onClick={() => filtered("todos")}
          >
            Todos
          </button>
          <button
            type="button"
            className={classNameEntrada}
            onClick={() => filtered("entrada")}
          >
            Entradas
          </button>
          <button
            type="button"
            className={classNameSaida}
            onClick={() => filtered("saída")}
          >
            Saídas
          </button>
        </nav>
      </div>
      <div>
        <ul>
          <div className={classNameDisplpay}>
            <h3>Você ainda não possui nenhum lançamentos</h3>
            <div className="no-transaction-img"></div>
          </div>
          {filteredList.map((item, index) => (
            <Card
              transaction={item}
              key={index}
              index={index}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
