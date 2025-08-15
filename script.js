const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está considerando comprar um carro elétrico. Qual desses fatores pesa mais na sua decisão?",
        alternativas: [
            {
                texto: "A tecnologia da bateria e a autonomia, para garantir que o carro atenda às minhas necessidades de viagem sem preocupações.",
                afirmacao: "Essa resposta sugere uma pessoa mais pragmática e focada em dados, que valoriza a funcionalidade, eficiência e segurança de um investimento."
            },
            {
                texto:  "A aceleração instantânea e a experiência de condução silenciosa e suave.",
                afirmacao: "Essa resposta sugere uma pessoa que valoriza a experiência e a emoção, que busca o prazer ao dirigir e aprecia a inovação e o desempenho de ponta."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual seria a sua principal preocupação ao planejar uma viagem longa com um carro elétrico?",
            alternativas: [
                {
                    texto: "A disponibilidade de pontos de recarga na rota e o tempo necessário para carregar a bateria.",
                    afirmacao: "Essa resposta sugere uma pessoa organizada e cautelosa, que se preocupa com a logística e o planejamento, buscando evitar imprevistos."
                },
                {
                    texto:  " O impacto ambiental da produção da bateria e o descarte de componentes no futuro. ",
                    afirmacao: "Essa resposta sugere uma pessoa com forte consciência ambiental e visão de longo prazo, que se preocupa não apenas com o uso, mas com o ciclo de vida completo do produto e seu impacto no planeta."
                }    
               
            ]
        },
        {
            enunciado: "Se você tivesse a oportunidade de projetar o interior de um carro elétrico, em qual inovação você focaria?",

            alternativas: [
                {
                    texto: "Em um painel de controle totalmente personalizável e interfaces que se integram perfeitamente com todos os seus dispositivos.",
                    afirmacao: "Essa resposta indica um perfil conectado e orientado para a tecnologia, que valoriza a conveniência e a personalização no dia a dia."
                },
                {
                    texto:    " Em materiais sustentáveis e assentos ergonômicos que transformam o interior em um espaço de relaxamento e conforto.",
               
                    afirmacao: "Essa resposta sugere um perfil focado no bem-estar e na sustentabilidade, que busca um ambiente tranquilo e confortável, e se preocupa com a origem e o impacto dos materiais."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();