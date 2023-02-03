import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

function Collaborator({ name, role, image, bgColor, onDelete }) {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="delete" onClick={onDelete} />
      <div className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default Collaborator;
