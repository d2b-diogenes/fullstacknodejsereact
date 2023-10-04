// Aula 3.6 Faça como eu fiz: desafio das rotas

const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favoritos")
    // Importando as rotas para serem usadas
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)
    // Agora quando for acessado "/favoritos" serão usadas a "rotaFavorito" 
    
const port = 8000
    
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
    // Visualizar: http://localhost:8000/







/*// Aula 2.6 Async Await na função que requisita o serviço de livros

const express = require("express")
const rotaLivro = require("./rotas/livro")
const cors = require("cors")
    // Foi importado o CORS
    // O CORS é o sitema de segurança que controla quem pode fazer requisições para a API e ela dá permissão de acesso entre o Front-End e o Back-End


const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))
    // Cros está bloqueando o acesso
    // ({origin: "*"})) irá liberar o acesso para qualquer um, mas como está sendo feito localmente, não tem problemas

app.use('/livros', rotaLivro)
    
const port = 8000
    
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
    // Visualizar: http://localhost:8000/

*/




/*// Aula 2.1 Métodos HTTP e rota get

const express = require("express")
const rotaLivro = require("./rotas/livro")
    // É dado o nome "rotaLivro" para a constante que irá receber o arqvuio JS "livro" que contem a rota 
    // No node não precisa passar o .js do arquivo

const app = express()
app.use(express.json())

const port = 8000

app.use('/livros', rotaLivro)
    // Chamo "app.use( )" para chamar o caminho e a constante que contém a rota
    // '/livros' é o nome do caminho que será usado na URL
    // 'rotaLivro' é a constante que contém a rota
    
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
    // Visualizar: http://localhost:8000/
 */




/* // Aula 1.5 Import Express

const express = require("express")

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send("Olá, mundo da Alura!")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
    // Visualizar: http://localhost:8000/

*/