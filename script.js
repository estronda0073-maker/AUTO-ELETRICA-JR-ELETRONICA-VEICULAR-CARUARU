// Adiciona um efeito de transparência no menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

// Função simples para confirmar o clique no WhatsApp
const btnWhats = document.querySelector('.btn-whatsapp');
btnWhats.addEventListener('click', () => {
    console.log("Cliente redirecionado para o WhatsApp");
});