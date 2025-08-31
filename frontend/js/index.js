function MudouTamanho() {
    if(window.innerWidth >= 768) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}

function OpenMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex';
    }

}