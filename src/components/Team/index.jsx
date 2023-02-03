import Collaborator from "../Collaborator";
import "./styles.css";

function Team({ name, primaryColor, secondaryColor, collaborators, onDelete }) {
  return (
    <>
      {collaborators.length > 0 && (
        <section className="team" style={{ backgroundColor: secondaryColor }}>
          <input className="input-color" type="color" value={secondaryColor} />
          <h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>{name}</h3>

          <div className="collaborators">
            {collaborators.map((collaborator) => {
              console.log('renderizando colaborador')

              return (
                <Collaborator
                  name={collaborator.name}
                  role={collaborator.role}
                  image={collaborator.image}
                  key={collaborator.name}
                  bgColor={primaryColor}
                  onDelete={onDelete}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Team;
