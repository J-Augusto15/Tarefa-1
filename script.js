const filmes = [
    { título: "O senhor do anel", genero: " Comedia" },
    { título: "Harry Potter e o Prisioneiro de Azkaban", genero: "Aventura e ficção científica" },
    { título: "a chefa", genero: "Comedia" },
    { título: "Comedia", genero: "Ação" },
    { título: "Interestelar", genero: "Ficção Cientifica/Aventura" },
];

const serie = [
    { título: "Dexter", genero: "Drama" },
    { título: "O Menttalita", genero: "Investigação Policial" },
    { título: "The Boys", genero: "Ação, Drama" },
    { título: "Breaking Bad", genero: "Drama Policial" },
    { título: "Friends", genero: "Comedia" },
];

function campotexto(generoEscolhido) {
    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].genero === generoEscolhido) {
            resultado.push(filmes[i].título)
        }

    }
    for (let i = 0; i < serie.length; i++) {
        if (serie[i].genero === generoEscolhido) {
            resultado.push(serie[i].título)
        }
    }

    const resultado = [];
}

const generoDigitado = "comedia";
const filmesEncontrados = campotexto(generoDigitado);

console.log(`Filmes do Genero "${generoDigitado}":`);
console.log(filmesEncontrados);
