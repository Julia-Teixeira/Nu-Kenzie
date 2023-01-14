import "./style.css";

export const IndexPage = ({ setPage }) => {
  return (
    <div className="IndexPage">
      <div className="containerIndex">
        <section className="section-intro">
          <div className="img-logo"></div>
          <div className="intro">
            <h1>Centralize o controle das sua finanças</h1>
            <span>de forma rápida e segura</span>
            <button
              className="button"
              type="button"
              onClick={() => setPage(false)}
            >
              Iniciar
            </button>
          </div>
        </section>
        <section className="section-exemplo"></section>
      </div>
    </div>
  );
};
