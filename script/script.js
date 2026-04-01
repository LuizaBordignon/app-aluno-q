let nome = "Luiza";
let Nome = "Maria Joana";

console.log(nome);
console.log(Nome);

const saudacao = `minha namorada se chama ${Nome}`;
console.log(saudacao);

// ARRAY:
const familia = ['luiza', 'maria joana'];
console.log(familia)

// OBJETO:
const salvador = {
   nome: "Jesus",
   idade: 33,
   cidade: "Belém"
};
console.log(salvador)

const fruta = 'morango';
const saladaFruta = fruta == 'tomate' ? 'vai na salada' : 'nao vai na salada';
console.log(saladaFruta)

let cont = 0
while (cont < 5 ){
    console.log(cont);
    cont++;
}

for (let i = 1; i <= 5; i++){
    console.log(i)
}

const frutas = ["Maçã", "Banana", "Morango"];

for (const f of frutas){
        console.log(f)
}

function somar(a,b){
    return a+b;
}

const numero = somar(5,9);
console.log(numero);

const subtrair = (a,b) => a - b;
console.log(subtrair(10,2));

const multiplicar = function(a,b){
    return a * b;
}
console.log(multiplicar(5,10));

const numeros = [1,2,3]
numeros.forEach((numero) => {
    console.log(numero * 2 )
});

const dobro = numeros.map((numero) => numero * 2);
console.log(dobro);

const idades = [15,20,25,17];
const cnh = idades.filter((idade) => idade >= 18);
console.log(cnh);

const usuarios = [ 
    { id: 1, nome: 'Maria Joana'},
    { id: 2, nome: 'Luiza'},
    { id: 2, nome: 'Fernanda' }
];

const usuarioEncontrado = usuarios.find((user) => user.id == 2);
console.log(usuarioEncontrado); 

const precos = [10,15,20];
const total = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log(total);

const palavras = ['Te', 'Amo', 'Maria'];

const fraseEspaco = palavras.join(' ');

console.log(fraseEspaco);
