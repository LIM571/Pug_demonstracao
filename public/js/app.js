document.addEventListener('DOMContentLoaded', function () {
    const botaoPositivo = document.querySelector('.positivo');
    const botaoNegativo = document.querySelector('.negativo');
    let movido = false;

    botaoPositivo.addEventListener('click', function () {
        alert('Muito obrigado');
    });

    botaoNegativo.addEventListener('click', function () {
        if (!movido) {
            botaoNegativo.style.transform = 'translate(100px, 100px)';
        } else {
            botaoNegativo.style.transform = 'translate(0, 0)';
        }
        movido = !movido;
    });
});
