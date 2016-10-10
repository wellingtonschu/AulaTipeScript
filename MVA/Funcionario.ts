import Pessoa = require('./Pessoa');

class Funcionario extends Pessoa {
    public salario: number;
    public codigoFuncionario: number;
    public cnpj: string;
}

Object.seal(Funcionario);
export = Funcionario;