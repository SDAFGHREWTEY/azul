document.addEventListener('DOMContentLoaded', function() {
    const imagens = [
        'img/images.jfif',
        'img/download (1).jfif',
        'img/download.jfif'
    ];

    let indiceAtual = 0;
    const img = document.getElementById('img-carrosel');
    if (!img || imagens.length === 0) return;

    // Mostrar a primeira imagem imediatamente
    img.src = encodeURI(imagens[indiceAtual]);

    // Troca automática a cada 5 segundos
    setInterval(function() {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        img.src = encodeURI(imagens[indiceAtual]);
    }, 5000);
});