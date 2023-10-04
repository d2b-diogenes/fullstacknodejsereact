// Aula 3.1 Acessando arquivos com Node
const fs = require("fs");
    // Métod que ler e escreve em arquivos

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    // A contante "datosAtuais" recebey o arquivo JSON
    // fs.readFileSync() - É o método 'fs' (fileSystem) que faz a leitura de arquivos
    // O método recebe apenas 1 parâmetro, o caminho para o arquivo
    // No caso, será ligo o arquivo JSON, mas o retorno ainda não é o arquivo JSON
    // JSON.parse() - Transforma em JSON o que foi recebido pelo método 'fs' 

console.log(dadosAtuais);
    // Retornou um Arra com 2 elementos dentro

const novoDado = { id: '3', nome: 'Livro mais que demais' }
    // Constante que recebe um novo elemento que irá ser adicionado no arquivi JSON

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")));
    // Verificando diretamente o arquivo "livros.json"
    // Foi alterado de forma definitiva o arquivo "livros.json"