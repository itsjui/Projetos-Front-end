let currentImageIndex = 0; // Índice da imagem atualmente visível
const items = document.querySelectorAll('.item'); // Seleciona todos os itens de imagem
const intervalTime = 5000; // Intervalo de tempo em milissegundos (3 segundos)

function scrollToPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--; // Decrementa o índice para mostrar a imagem anterior
    } else {
        currentImageIndex = items.length - 1; // Volta para a última imagem se estiver na primeira
    }
    updateCarousel(); // Atualiza o carrossel
}

function scrollToNextImage() {
    if (currentImageIndex < items.length - 1) {
        currentImageIndex++; // Incrementa o índice para mostrar a próxima imagem
    } else {
        currentImageIndex = 0; // Volta para a primeira imagem se estiver na última
    }
    updateCarousel(); // Atualiza o carrossel
}

function updateCarousel() {
    items.forEach((item, index) => {
        if (index === currentImageIndex) {
            item.style.display = 'block'; // Mostra o item correspondente ao índice atual
        } else {
            item.style.display = 'none'; // Esconde os demais itens
        }
    });
}

// Função para avançar automaticamente as imagens
function autoScroll() {
    scrollToNextImage();
    setTimeout(autoScroll, intervalTime);
}

// Chama a função inicial para mostrar a primeira imagem ao carregar a página
updateCarousel();
// Inicia o carrossel automático
setTimeout(autoScroll, intervalTime);
