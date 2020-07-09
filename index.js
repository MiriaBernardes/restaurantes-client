var nome = 'Top100'

var restaurantes = [];

restaurantes.push({nome: 'top20'}, {nome: 'top200'}, {nome: 'top2000'})

axios.post('http://localhost:3000/restaurantes', restaurantes)
.then((resposta) => {
    console.log(resposta.data)
})

axios.get('http://localhost:3000/restaurantes')
.then((resposta) => {
    console.log(resposta.data)
})

axios.put('http://localhost:3000/restaurante/' + 'top20', {nome: 'top21'})
.then((resp) => {
    console.log(resp.data);
}).catch((erro) => {
    console.log(erro)
})


axios.delete('http://localhost:3000/restaurante/' + 'top20')
.then((resposta) => {
    console.log(resposta.data)
})
