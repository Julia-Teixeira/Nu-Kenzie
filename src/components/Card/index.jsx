import { FaTrash } from "react-icons/fa";
import "./style.css";

export const Card = ({
  transaction,
  index,
  setListTransactions,
  listTransactions,
}) => {
  const typeBorder =
    transaction.type === "entrada" ? "border-Entrada" : "border-Saida";

  const handleTransiction = (ind) => {
    const filtered = listTransactions.filter((item) => ind !== item);
    setListTransactions(filtered);
  };

  let value = 0;
  if (transaction.value < 0) {
    value = transaction.value * -1;
  } else {
    value = transaction.value;
  }

  return (
    <li id={index} className={typeBorder}>
      <div>
        <p className="transaction-description">{transaction.description}</p>
        <div>
          <p className="transaction-value">R$ {value.toFixed(2)}</p>
          <button
            className="transaction-trashCan"
            type="button"
            onClick={() => handleTransiction(transaction)}
          >
            <FaTrash className="trashCan" />
          </button>
        </div>
      </div>
      <p className="transaction-type">{transaction.type}</p>
    </li>
  );
};
