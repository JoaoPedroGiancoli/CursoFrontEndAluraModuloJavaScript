import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import {ContaSalario} from "./Contas/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from './Funcionario/SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, 122334232);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 1238693232);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 409554987870 , "456");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123");


console.log(diretorestaLogado);

console.log(gerenteestaLogado);