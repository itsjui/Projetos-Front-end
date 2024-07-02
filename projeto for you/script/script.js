document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelectorAll('.itens');
    let countSlide = 0;

    function nextSlide() {
        // Oculta todas as imagens
        slider.forEach(item => {
            item.classList.remove('on');
        });

        // Mostra a imagem atual
        slider[countSlide].classList.add('on');

        // Atualiza o índice do slide
        countSlide++;

        // Volta ao primeiro slide se atingir o final
        if (countSlide === slider.length) {
            countSlide = 0;
        }
    }

    // Chama a função nextSlide a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 3000);
});
