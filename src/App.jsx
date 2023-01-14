import "./App.css";
import { useState } from "react";
import { IndexPage } from "./pages/IndexPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const [page, setPage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {page ? (
        <IndexPage setPage={setPage} />
      ) : (
        <HomePage
          setPage={setPage}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default App;
