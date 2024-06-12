function LinkinPark(nome, ano, albuns) {
    this.nome = nome;
    this.ano = ano;
    this.albuns = albuns;
}

function Slipknot(nome, ano, albuns, membros) {
    LinkinPark.call(this, nome, ano, albuns); 
    this.membros = membros;
}

Slipknot.prototype = Object.create(LinkinPark.prototype);
Slipknot.prototype.constructor = Slipknot;

function Korn(nome, ano, albuns, premios) {
    LinkinPark.call(this, nome, ano, albuns); 
    this.premios = premios;
}

Korn.prototype = Object.create(LinkinPark.prototype);
Korn.prototype.constructor = Korn;

const banda1 = new LinkinPark("LinkinPark", 2000, ["Hybrid Theory", "Meteora"]);
const banda2 = new Slipknot("Slipknot", 1995, ["Iowa", "Vol. 3: (The Subliminal Verses)"], 9);
const banda3 = new Korn("Korn", 1993, ["Korn", "Follow the Leader"], ["Grammy", "MTV Music Award"]);

console.log(banda1);
console.log(banda2);
console.log(banda3);
