const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
<<<<<<< HEAD
  {id: 1, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 2, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 3, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 4, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 5, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 6, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 7, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 8, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 9, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 10,nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} 
=======
  {id: 1, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 2, nome: "Game - Red Dead Redemption 2 - PS4", preco: "89.99", descricao: "Jogo Brabo", img: "imagens/img-2.jpg"} ,
  {id: 3, nome: "Game final fantasy xvi - ps5", preco: "307.99", descricao: "Jogo Bão Demais", img: "imagens/img-3.jpg"} ,
  {id: 4, nome: "Vídeo Game Stick Lite 4K Com 15.000 Mil Jogos Clássicos + 2 Controles Sem Fio", preco: "179.90", descricao: "Console Brabo", img: "imagens/img-4.jpg"} ,
  {id: 5, nome: "console xbox series s 500gb ssd", preco: "2.067.30", descricao: "Console Bão mas pior que Playstatrion", img: "imagens/img-5.jpg"} ,
  {id: 6, nome: "Smart TV LED 32 HD TCL 32S615 com Design Sem Bordas Bluetooth Google Assistant e Android TV", preco: "1.199.00", descricao: "Note Brabo", img: "imagens/img-5.jpg"} ,
  {id: 7, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Tv boa mas tem melhores", img: "imagens/img-6.jpg"} ,
  {id: 8, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 9, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 10, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} 
>>>>>>> 465c368963cf281395939577face30edf7234859
] ;

function buscaPorId(id){
  const produto= produtos.find(produto => produto.id == id);
  return produto || null
};

app.get('/', (req, res) => {
  res.render('index', {produtos});
});



app.get('/pagina', (req, res) => {
  res.render('pagina', { message: 'produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

