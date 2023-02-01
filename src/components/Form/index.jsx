import Button from "../Button";
import Select from "../Select";
import TextField from "../TextField";

import "./style.css";

const Form = () => {
  const times = ['Programação', 'Front-end', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão']

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <Select items={times} label="Time" />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
