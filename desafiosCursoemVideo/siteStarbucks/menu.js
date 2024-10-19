
var itens = document.getElementById('itens');

// Função para ajustar o tamanho do menu baseado na largura da janela
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

// Função para controlar o clique no menu
function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

// Registrar evento de clique no menu para exibir/ocultar
itens.addEventListener('click', clickMenu);

// Verificar tamanho da janela ao carregar a página e redimensionar
window.onload = mudouTamanho;
window.onresize = mudouTamanho;
