import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricando",111222333309);

const cliente2 = new Cliente("Alice",88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


console.log(ContaCorrente.numeroDeContas);
//a