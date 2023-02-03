import "./styles.css";

function Collaborator({ name, role, image, bgColor }) {
  return (
    <div className="colaborador">
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
