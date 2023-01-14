import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { TotalMoney } from "../../components/TotalMoney";
import "./style.css";

export const HomePage = ({
  setPage,
  listTransactions,
  setListTransactions,
}) => {
  return (
    <div className="HomePage">
      <header>
        <div className="container header-HomePage">
          <div className="logo"></div>
          <button
            className="buttonPageIndex"
            type="button"
            onClick={() => setPage(true)}
          >
            Início
          </button>
        </div>
      </header>
      <main>
        <div className="container div-main">
          <section className="form">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <section className="sec-List">
            <List
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          </section>
        </div>
      </main>
    </div>
  );
};
