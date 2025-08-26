const carouselItems = document.querySelectorAll('.carousel-item');
// Seleciona todos os slides da classe "carousel-item"
const carouselDots = document.querySelectorAll('.carousel-dot');
// Seleciona todas as bolinhas de navegação
let currentItem = 0;
// Variável que armazena o índice do slide atual (inicia em 0)

function showSlide(index) {
    // função para exibir o slide correspondente ao índice
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
     
})};

//Ativa apenas o slide do índice fornecido, desativando os outros
// carouselItems é uma variável que contém nodeList, uma coleção do elemento HTML
// selecionados usando document.querySelectorAll('.carouselItems').
// O método forEach é uma função nativa de arrays (e coleções com nodelist = slide1 está atribuindo na bolinha 1)
// em javascript. Ele repete sobre cada elemento de coleção carouselItems, executando uma função para cada item.
// (item, i) => {...} Esta é uma arrow function (função de seta) usada como argumento do
// forEach. Ela é chamada para cada elemento da coleção e recebe dois parâmetros:
//item: o elemento HTML atual (um slide, ou seja, um <div class="carousel-Item">) sendo
// processado na iteração.
//i: o índice do elemento atual na coleção (0 para o primeiro slide, 1 para o segundo, 2 para o terceiro,etc).
//Propósito: permite manipular cada slide individualmente (item) e usar seu índice (i) para decidir
// se ele deve ser ativado ou desativado com base no índice fornecido (index)

// item.classList -  classList é uma propriedade do objeto item (um elemento HTML) que
// fornece acesso ás classes css associadas a esse elemento. É um objeto que permite manipular
//classes de form prática (adicionar, remover, verificar,etc).
//Propósito: usado aqui para manipular a classe  active no slide, que controla sua
// visibilidade (no CSS, .carousel-item.active tem opacity: 1, enquanto .carousel-item sem active tem opacity: 0).





carouselDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);

});



//Ativa a bolinha correspondente ao slide atual 
//CarouselDots é uma variável que contém um NodeList, uma coleção de elementos HTML
//selecionados usando document.querySelectorAll('.carousel-dot'). Cada elemento desta
//coleção é uma bolinha de navegação do carrossel (um <span> com a classe carousel-dot).
//O método forEach é uma função nativa de arrays (e coleções como NodeList - slide
//está atribuida na bolinha 1) em Javascript. Ele repete sobre cada elemento da coleção
//carouselDots, executando uma  função para cada bolinha.
//(dot, i) => {...} - Esta é uma arrow function (função de seta) usada como
//argumento do forEach. Ela é chamada para cada elemento da coleção e recebe dois parâmetros:
//dot: O elemento HTML atual (uma bolinha, ou seja, um <span class="carousel-dot">)
//sendo processado na iteração.
// i: O índice do elemento atual na coleção (0 para a primeira bolinha, 1 para a segunda, 2 para a terceira, etc..).

//dot.classList - classList é uma propriedade do objeto dot (um elemento HTML) que 
//fornece acesso ás classes CSS associadas a esse elemento. É um objeto que permite
//manipular classes de forma prática (adicionar, remover, verificar,etc.) 
//Propósito: Usado aqui para manipular a classe active da bolinha, que controla sua 
//aparência visual (no CSS, .carousel-dot.active tem background-color: #FF6F61 e 
// transform:scale(1.3), destacando a bolinha ativa).
//.toggle('active, i === index) - (=== sinal de comparação) - O método toggle do
//objeto classList adiciona ou remove uma classe do elemento com base em uma condição.
//Ele aceita dois argumentos:

//*'active': A classe CSS que será adicionada ou removida da bolinha.
//i === index: Uma expressão booleana(falso ou verdadeiro) que determina se a classe
// deve ser aidicionada (true) ou removida (false).

//i= O índice da bolinha atual na iteração (0, 1 ou 2 no exemplo com três bolinhas).

// index: O índice do slide que deve ser exibido, passado como argumento para a funçaõ
//showSlide(index)

function goToSlide(index) {
// função para navegar diretamente para um slide específico
// function goToSlide(index) - define uma função Javascript chamada goToSlide que
//aceita um parâmetro chamado index.
//- O parâmetro index é um número inteiro que representa o índice do slide
//que deve ser exibido (por exemplo, 0 para o primeiro slide, 1 para o segundo, 2 para o terceiro,etc..).
//Propósito: permite que o carrossel exiba um slide específico com base no índice fornecido, 
//geralmente chamado quando o usuário clica em uma bolinha de navegação.

currentItem = index;
//Atualiza o índice do slide atual
//currentItem é uma variável global definida no início do arquivo script.js:
//Por exemplo, se o usuário clica na segunda bolinha(índice 1), currentItem será
//definido com 1.

showSlide(currentItem);
//Exibe o slide correpondente

// chma a funçaõ showSlide, passando o valor atual de currentItem como argumento.
//A função showSlide(index) (definida anteriormente no código) é reponsável por:

//Exibir o slide correspondente ao índice fornecido, adicionando a classe active ao
//elemento <div class="carousel-item"> com esse índice e removendo-a dos outros slides.
//Destacar a bolinha de navegação correspondente, adicionando a classe active ao elemento
//<span class="carousel-dot"> com o mesmo índice e removendo-a das outras bolinhas

}

function nextSlide(){
    //Função para avançar ao próximo slide
    //Define uma função Javscript chamada nextSlide.

//Propósito: Avança o carrossel para a próxima slide, atualizando o slide ative e a bolinha de navegação
//correspondente. É usada principalmente para a transição automática dos slides, mas também pode ser 
//chamada em outras interações.

currentItem = (currentItem + 1) % carouselItems.length;

//Incrementa o índice, voltando ao início se ultrapassar o último slide
//Esta linha atualiza a variável global currentItem, que armazena o índice do slide
//atualmente ativo (inicializada como let currentItem = 0; no início do script.js).

//currentItem: O índice do slide atual (por exemplo, 0 para o primeiro slide, 1 para o segundo slide, etc..).
//currentItem + 1: Incrementa o índice atual para apontar para o próximo slide.
//carouselItems: um NodeLIST contendo todos os slides do carrossel, obtido com document.
//querySelectorAll('.carousel-item'). No exemplo, há três slides, então carouselItems.
//length é 3.
//% carouselItems.length: O operador módulo (%) garante que o índice permaneça dentro dos
//limites da quantidade de slides. Se currentItem + 1 ultrapassar o número total de slides,
//o módulo retorna o índice ao início (0).

showSlide(currentItem);
//Exibe o novo slide
//Chama a função showSlide, passando o valor atualizado de currentItem como argumento.
//A funçao showSlide(index) (definida anteriormente no código) é responsável por:

//Adicionar a classe active ao slide com o índice fornecido (<div class="carousel-item">).
//tornando-o visível (opacity: 1 no CSS).
//Remover a classe active dos outros slides, tornando-a invisíveis (opacity: 0)
//Adicionar a classe active á bolinha de navegação correpondente 
//(<span class="carousel-dot">), destacando-a (cor #FF6F61 e escala 1.3 no CSS).
//Remover a classe active das outros bolinhas, retornando-as ao estado padrão (cor #FFD1CC)
}

showSlide(currentItem);
//Exibe o primeiro slide ao carregar a página 
setInterval(nextSlide, 5000);
//Configura a alternância automática de slides a cada 5 segundos