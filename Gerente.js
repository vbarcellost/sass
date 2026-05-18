import Funcionario from "./Funcionario.js";

export default class Gerente extends Funcionario {
  constructor(nome, salario, setor, equipeResponsavel) {
    super(nome, salario, setor);
    this.equipeResponsavel = equipeResponsavel;
  }

  aprovarProjeto() {
    console.log(this.nome + " aprovou um projeto.");
  }
}
