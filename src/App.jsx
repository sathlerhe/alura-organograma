import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborator, setCollaborator] = useState([]);

  const onNewCollaboratorAdded = (collaboratorProp) => {
    setCollaborator([...collaborator, collaboratorProp]);
  };

  function onDeleteCollaborator() {
    console.log('delete')
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onSubmitCollaborator={(collaborator) =>
          onNewCollaboratorAdded(collaborator)
        }
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborator.filter(
            (collaboratorFilter) => collaboratorFilter.team === team.name
          )}
          onDelete={onDeleteCollaborator}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
