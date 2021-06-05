const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Motta',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();