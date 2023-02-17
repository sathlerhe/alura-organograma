import { useState } from "react";
import { v4 as uuid } from "uuid";

import Button from "../Button";
import Select from "../Select";
import Input from "../Input";

import "./style.css";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import { ITeam } from "../../shared/interfaces/ITeam";

interface IForm {
  onSubmitCollaborator: (collaborator: ICollaborator) => void;
  teams: ITeam[];
  onSubmitTeam: (team: ITeam) => void;
}
const Form: React.FC<IForm> = ({
  onSubmitCollaborator,
  teams,
  onSubmitTeam,
}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState<string>(teams[0].name);

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("#000000");

  console.log(teams);

  function onSubmitCollaboratorForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitCollaborator({
      name,
      role,
      image,
      team,
      id: uuid(),
      favorited: false,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  }

  function onSubmitTeamForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitTeam({ name: teamName, primaryColor: teamColor, id: uuid() });
    setTeamName("");
    setTeamColor("#000000");
  }

  return (
    <section className="form">
      <form onSubmit={onSubmitCollaboratorForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <Input
          required
          label="Nome"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          setValue={setName}
        />

        <Input
          required
          label="Cargo"
          name="role"
          placeholder="Digite seu cargo"
          value={role}
          setValue={setRole}
        />

        <Input
          required
          label="Imagem"
          name="image"
          placeholder="Digite o endereço da imagem"
          value={image}
          setValue={setImage}
        />

        <Select
          required
          items={teams}
          name="team"
          label="Time"
          value={team}
          setValue={setTeam}
        />

        <Button>Criar Card</Button>
      </form>

      <form onSubmit={onSubmitTeamForm}>
        <h2>Preencha os dados para criar um novo time</h2>

        <Input
          required
          label="Nome"
          name="teamName"
          placeholder="Digite o nome do time"
          value={teamName}
          setValue={setTeamName}
        />

        <Input
          required
          type="color"
          label="Cor"
          name="teamColor"
          placeholder="Digite a cor do time"
          value={teamColor}
          setValue={setTeamColor}
        />

        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
