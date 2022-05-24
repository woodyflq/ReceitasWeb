const express = require('express')
const app = express()

const rep = require('./public/js/ReceitaRepository')
const repositorio = new rep()

const receita = require('./public/js/Receita')


const port = 3000



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/static', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {lista:repositorio.receitas, home: true, add: false})
})

app.get('/receita', (req, res) => {
    res.render('pages/receita', {home: false, add: true})
})

app.get('/detalhe/:id', (req, res) => {
    res.render('pages/detalhe', {lista: repositorio.receitas, id: req.params.id, home: false, add: false})
})

app.post('/addReceita', (req, res) => {
    repositorio.inserir(new receita(repositorio.count, req.body.nome, req.body.ingredientes, req.body.preparo))
    res.redirect('/')
})


app.post('/delete/:id', (req, res) =>{
    repositorio.delete(req.params.id)
    res.redirect('/')
})

// app.post('/update/:id', (req, res) =>{
//     repositorio.update(req.params.id, req.body.nome, req.body.ingredientes, req.body.preparo)
//     res.redirect('/')
// })


app.listen(port, () => {
    console.log('A aplicação está em execução!')
})