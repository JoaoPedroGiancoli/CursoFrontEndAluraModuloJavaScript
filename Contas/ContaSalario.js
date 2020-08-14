import {Conta} from "./Conta.js"

export class ContaSalario extends Conta{
    constructo(cliente){
        // com super nao foi
        this(0,this.cliente,100);
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor , taxa);
    }
}