// let cliente1 = {
//     nome: "joão",
// }

// let cliente2 = cliente1;

// console.log(cliente1.nome);
// console.log(cliente2.nome);

// cliente1.nome = "felipe"

// console.log(cliente1.nome);
// console.log(cliente2.nome);


// let cliente1 = {
//    nome: "joão",
// }
// let cliente2 = {
//    nome: "maria",
// }

// cliente1 = cliente2

// console.log(cliente1)

// let user1 = {
//     nome: "felipe",
// };
// let user2 = {};

// for (key in user1){
//     user2[key] = user1[key]
// }

// user1.nome = "vivi";

// console.log(user2)

let user1 = {
    nome: "felipe",
};
let user2 = {};

Object.assign(user2, user1)

user1.nome = "vivi"

console.log(user2)