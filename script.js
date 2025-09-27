function mostrarImagem(app) {
    if(app === 'whatsapp') {
        let img = document.getElementById('imgWhatsapp');
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
    } else if(app === 'youtube') {
        let img = document.getElementById('imgYoutube');
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
    }
}
