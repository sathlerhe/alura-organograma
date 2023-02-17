import { useState } from "react";
import { v4 as uuid } from "uuid";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";
import { ICollaborator } from "./shared/interfaces/ICollaborator";
import { ITeam } from "./shared/interfaces/ITeam";

function App() {
  const [teams, setTeams] = useState<ITeam[]>([
    {
      id: uuid(),
      name: "Programação",
      primaryColor: "#57c278",
    },
    {
      id: uuid(),
      name: "Front-end",
      primaryColor: "#82CFFA",
    },
    {
      id: uuid(),
      name: "Data Science",
      primaryColor: "#A6D157",
    },
    {
      id: uuid(),
      name: "DevOps",
      primaryColor: "#E06B69",
    },
    {
      id: uuid(),
      name: "UX e Design",
      primaryColor: "#DB6EBF",
    },
    {
      id: uuid(),
      name: "Mobile",
      primaryColor: "#FFBA05",
    },
    {
      id: uuid(),
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const onNewCollaboratorAdded = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, { ...collaborator }]);
  };

  function onDeleteCollaborator(id: string) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeTeamColor(color: string, id: string) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.primaryColor = color;
        }

        return team;
      })
    );
  }

  function onSubmitTeam(newTeam: ITeam) {
    setTeams([...teams, { ...newTeam }]);
  }

  function toggleFavorite(id: string) {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id) {
          collaborator.favorited = !collaborator.favorited;
        }
        return collaborator;
      })
    );
  }

  return (
    <div className="App">
      <Banner src="/images/banner.png" alt="Banner da organo" />
      <Form
        teams={teams}
        onSubmitCollaborator={(collaborator) =>
          onNewCollaboratorAdded(collaborator)
        }
        onSubmitTeam={onSubmitTeam}
      />

      {teams.map((team) => (
        <Team
          changeColor={changeTeamColor}
          key={team.id}
          name={team.name}
          id={team.id}
          primaryColor={team.primaryColor}
          collaborators={collaborators.filter(
            (collaboratorFilter) => collaboratorFilter.team === team.name
          )}
          onDelete={onDeleteCollaborator}
          toggleFavorite={toggleFavorite}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
