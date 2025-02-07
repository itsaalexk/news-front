import { GithubIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div>
        <p>
          Puedes encontrar tanto el Front como el Back de esta prueba técnica
          subida en Github.
        </p>
        <p>
          <a
            href="https://github.com/itsaalexk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Visita mi GitHub <GithubIcon />
          </a>
        </p>
      </div>
    </footer>
  );
};
