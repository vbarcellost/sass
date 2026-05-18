export default class Funcionario {
  constructor(nome, salario, setor) {
    this.nome = nome;
    this.salario = salario;
    this.setor = setor;
  }

  mostrarDados() {
    console.log("Nome:", this.nome);
    console.log("Salário: R$", this.salario);
    console.log("Setor:", this.setor);
  }
}
