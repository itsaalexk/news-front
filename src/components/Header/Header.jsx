import { useLocation, useNavigate } from "react-router";
import { Search } from "lucide-react";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewsPath = location.pathname === "/news";

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h1 className="h4 text-light mb-0 text-center text-md-start">
              App de Noticias
            </h1>
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar noticias..."
                aria-label="Buscar noticias"
              />
              <button className="btn btn-outline-light" type="button">
                <Search size={18} />
              </button>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-end">
            <button
              onClick={() => navigate(isNewsPath ? "/archived-news" : "/news")}
              className="btn btn-outline-light"
            >
              {isNewsPath ? "Ir a noticias archivadas" : "Ver noticias"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
