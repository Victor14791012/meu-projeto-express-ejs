const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 2, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 3, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 4, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 5, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 6, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 7, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 8, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 9, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} ,
  {id: 10, nome: "name", preco: "12", descricao: "sss", img: "nome.jpg"} 
] ;

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá mundo' });
});



app.get('/pagina', (req, res) => {
  res.render('pagina', { message: 'produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

