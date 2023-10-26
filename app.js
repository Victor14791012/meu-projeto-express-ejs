const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 2, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 3, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 4, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 5, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 6, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 7, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 8, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 9, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} ,
  {id: 10, nome: "Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6 Windows 11 - Cinza Chumbo", preco: "2.499.90", descricao: "Note Brabo", img: "imagens/img-1.jpg"} 
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

