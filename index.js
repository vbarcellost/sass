import Gerente from "./Gerente.js";
import Desenvolvedor from "./Desenvolvedor.js";

const funcionario1 = new Gerente(
  "Carlos",
  8000,
  "Administração",
  "Equipe A"
);

const funcionario2 = new Desenvolvedor(
  "Ana",
  5000,
  "Tecnologia",
  "JavaScript"
);

const funcionario3 = new Desenvolvedor(
  "Pedro",
  4500,
  "Tecnologia",
  "Python"
);

funcionario1.mostrarDados();
funcionario1.aprovarProjeto();

console.log("----------------");

funcionario2.mostrarDados();
funcionario2.programar();

console.log("----------------");

funcionario3.mostrarDados();
funcionario3.programar();
