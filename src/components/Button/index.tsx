import { ReactNode } from "react";
import "./style.css";

interface IButton {
  children: ReactNode;
}
const Button: React.FC<IButton> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
