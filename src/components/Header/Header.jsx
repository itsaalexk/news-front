import { useLocation, useNavigate } from "react-router";

export function Header() {
  const location = useLocation();

  const path = location.pathname;
  const navigate = useNavigate();

  const isNewsPath = path === "/news";

  return (
    <header className="header-bg py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <p className="lead text-light">
              Desarrollado con React & Bootstrap
            </p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <button
              onClick={() => navigate(isNewsPath ? "/archived-news" : "/news")}
              className="btn btn-primary btn-lg px-4 py-3"
            >
              {isNewsPath ? "Ver noticias archivadas" : "Ver noticias"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
