import { Header } from "../components/Header/Header";
import { Routes, Route, Navigate } from "react-router";
import App from "../App";
import AchivedNewsView from "../views/archivedNewsView/ArchivedNewsView";
import { CreateNews } from "../views/createNews/CreateNews";

export function LayoutComponent() {
  return (
    <div>
      <Header />
      <main className="m-5 pt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/news" />} />
          <Route path="/news" element={<App />} />
          <Route path="/archived-news" element={<AchivedNewsView />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="*" element={<Navigate to="/news" />} />
        </Routes>
      </main>
    </div>
  );
}
