const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "const minhaVariavel",
            "let minhaVariavel",
            "Ambas as opções"
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara dois valores para igualdade, sem levar em conta o tipo",
            "Compara dois valores para igualdade, levando em conta o tipo",
            "Verifica se um valor é menor que outro"
        ],
        correta: 1
    },
    {
        pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
        respostas: [
            "Usando a estrutura 'if-else'",
            "Com a declaração 'switch'",
            "Utilizando loops como 'for' ou 'forEach'"
        ],
        correta: 2
    },
    {
        pergunta: "Como você define uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "var minhaFuncao = function() {}",
            "Ambas estão corretas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        respostas: [
            "Um método de criptografia",
            "Um operador que cria um novo objeto",
            "Um modelo de objeto para manipular documentos HTML"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
        respostas: [
            "Exibir uma mensagem de erro",
            "Criar uma variável",
            "Imprimir dados no console"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um 'callback' em JavaScript?",
        respostas: [
            "Uma função que é passada como argumento para outra função e é executada após algum evento",
            "Um tipo de variável",
            "Um operador lógico"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'map()' faz em JavaScript?",
        respostas: [
            "Executa uma função de callback em cada elemento de um array e retorna um novo array com os resultados",
            "Remove elementos duplicados de um array",
            "Ordena os elementos de um array em ordem alfabética"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Um método de formatação de texto",
            "Uma linguagem de estilização",
            "Um formato de dados leve e intercambiável"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    quiz.appendChild(quizItem)
}