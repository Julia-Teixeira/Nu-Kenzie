import "./index.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );
  return (
    <section className="section-TotalMoney">
      <div className="div-TotalMoney">
        <p>Valor Total</p>
        <span>R$ {total}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </section>
  );
};
