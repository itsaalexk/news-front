import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
