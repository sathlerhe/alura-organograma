import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [collaborator, setCollaborator] = useState([]);

  const onNewCollaboratorAdded = (collaboratorProp) => {
    setCollaborator([...collaborator, collaboratorProp]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        onSubmitCollaborator={(collaborator) =>
          onNewCollaboratorAdded(collaborator)
        }
      />

      <Team name="Programação" />
    </div>
  );
}

export default App;
