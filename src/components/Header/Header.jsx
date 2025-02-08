import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useDebouncedSearchQuery } from "../../hooks/useDebounceSearchQuery";

const DEBOUNCE_TIME = 200;

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewsPath = location.pathname === "/news";
  const { searchQuery, setSearchQuery } =
    useDebouncedSearchQuery(DEBOUNCE_TIME);
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 text-md-start text-center mb-3 mb-md-0">
            <h1 className="h4 text-light mb-0">App de Noticias</h1>
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="input-group">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                className="form-control"
                placeholder={
                  isNewsPath
                    ? "Buscar noticias destacadas"
                    : "Buscar noticias archivadas"
                }
                aria-label="Buscar noticias"
              />
              <button className="btn btn-outline-light" type="button">
                <Search size={18} />
              </button>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-md-end justify-content-center">
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
