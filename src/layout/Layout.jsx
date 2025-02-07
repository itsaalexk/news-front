import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Routes, Route } from "react-router";
import App from "../App";
import AchivedNewsView from "../views/archivedNewsView/ArchivedNewsView";

export function LayoutComponent() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<App />} />
          <Route path="/archived-news" element={<AchivedNewsView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
