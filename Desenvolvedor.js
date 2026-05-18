import Funcionario from "./Funcionario.js";

export default class Desenvolvedor extends Funcionario {
  constructor(nome, salario, setor, linguagemPrincipal) {
    super(nome, salario, setor);
    this.linguagemPrincipal = linguagemPrincipal;
  }

  programar() {
    console.log(
      this.nome + " está programando em " + this.linguagemPrincipal
    );
  }
}
