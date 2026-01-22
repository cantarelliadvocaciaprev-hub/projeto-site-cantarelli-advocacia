import { useNavigate } from "react-router-dom";

interface SkipLink {
  id: string;
  label: string;
}

interface SkipLinksProps {
  links?: SkipLink[];
}

const defaultLinks: SkipLink[] = [
  { id: "main-content", label: "Ir para o conteúdo principal" },
  { id: "contact", label: "Ir para contato" },
];

const SkipLinks = ({ links = defaultLinks }: SkipLinksProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Links de navegação rápida"
      className="skip-links-container"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(link.id);
          }}
          className="skip-link"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default SkipLinks;
