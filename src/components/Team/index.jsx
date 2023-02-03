import Collaborator from "../Collaborator";
import "./styles.css";

function Team({ name, primaryColor, secondaryColor, collaborators }) {
  return (
    <>
      {collaborators.length > 0 && (
        <section className="team" style={{ backgroundColor: secondaryColor }}>
          <h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>{name}</h3>

          <div className="collaborators">
            {collaborators.map((collaborator) => (
              <Collaborator
                name={collaborator.name}
                role={collaborator.role}
                image={collaborator.image}
                key={collaborator.name}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Team;
