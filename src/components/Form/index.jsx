import { useState } from "react";
import Button from "../Button";
import Select from "../Select";
import TextField from "../TextField";

import "./style.css";

const Form = ({ onSubmitCollaborator }) => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState(times[0]);

  const onSave = (e) => {
    e.preventDefault();
    onSubmitCollaborator({ name, role, image, team });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          required
          label="Nome"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          setValue={setName}
        />

        <TextField
          required
          label="Cargo"
          name="role"
          placeholder="Digite seu cargo"
          value={role}
          setValue={setRole}
        />

        <TextField
          required
          label="Imagem"
          name="image"
          placeholder="Digite o endereço da imagem"
          value={image}
          setValue={setImage}
        />

        <Select
          required
          items={times}
          name="team"
          label="Time"
          value={team}
          setValue={setTeam}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
