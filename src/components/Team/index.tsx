import hexToRgba from "hex-to-rgba";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import Collaborator from "../Collaborator";
import "./styles.css";

interface ITeam {
  name: string;
  primaryColor: string;
  id: string;
  collaborators: ICollaborator[];
  onDelete: (id: string) => void;
  toggleFavorite: (id: string) => void;
  changeColor: (color: string, id: string) => void;
}
function Team({
  name,
  primaryColor,
  id,
  collaborators,
  onDelete,
  changeColor,
  toggleFavorite,
}: ITeam) {
  return (
    <>
      {collaborators.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: hexToRgba(primaryColor, "0.6") }}
        >
          <input
            className="input-color"
            type="color"
            value={primaryColor}
            onChange={(e) => changeColor(e.target.value, id)}
          />
          <h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>{name}</h3>

          <div className="collaborators">
            {collaborators.map((collaborator) => {
              return (
                <Collaborator
                  name={collaborator.name}
                  role={collaborator.role}
                  image={collaborator.image}
                  key={collaborator.id}
                  date={collaborator.date}
                  bgColor={primaryColor}
                  id={collaborator.id}
                  favorited={collaborator.favorited}
                  onDelete={onDelete}
                  toggleFavorite={toggleFavorite}
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
