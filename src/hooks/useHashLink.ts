import { useNavigate, useLocation } from "react-router-dom";

export const useHashLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split("#");
    const targetId = hash;

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to allow page to render
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return handleHashLink;
};