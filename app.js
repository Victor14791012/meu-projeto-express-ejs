const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 2, nome: "Game - Red Dead Redemption 2 - PS4", preco: "89.99", descricao: "Jogo Brabo", img: "imagens/img-2.jpg"} ,
  {id: 3, nome: "Game final fantasy xvi - ps5", preco: "307.99", descricao: "Jogo Bão Demais", img: "imagens/img-3.jpg"} ,
  {id: 4, nome: "Vídeo Game Stick Lite 4K Com 15.000 Mil Jogos Clássicos + 2 Controles Sem Fio", preco: "179.90", descricao: "Console Brabo", img: "imagens/img-4.jpg"} ,
  {id: 5, nome: "console xbox series s 500gb ssd", preco: "2.067.30", descricao: "Console Bão mas pior que Playstatrion", img: "imagens/img-5.jpg"} ,
  {id: 6, nome: "Smart TV LED 32 HD TCL 32S615 com Design Sem Bordas Bluetooth Google Assistant e Android TV", preco: "1.199.00", descricao: "Note Brabo", img: "imagens/img-6.jpg"} ,
  {id: 7, nome: "PC GAMER", preco: "4.499.90", descricao: "pc gamer é bom demais", img: "imagens/img-7.jpg"} ,
  {id: 8, nome: "mouse razer", preco: "100.00", descricao: "bom mouse", img: "imagens/img-8.jpg"} ,
  {id: 9, nome: "PS5", preco: "4.499.90", descricao: "O Melhor video game que tem", img: "imagens/img-9.jpg"} ,
  {id: 10, nome: "fone HAVIT", preco: "150.00", descricao: "Já foi o melhor do mercado hoje não é mais", img: "imagens/img-10.jpg"} 

] ;

function buscaPorId(id){
  const produto= produtos.find(produto => produto.id == id);
  return produto || null
};

app.get('/', (req, res) => {
  res.render('index', {produtos});
});



app.get('/pagina/:id', (req, res) => {
  const produto = buscaPorId(req.params.id)
  res.render('pagina', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

