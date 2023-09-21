const modal = document.getElementById('fundo');
const video = document.getElementById('pitch')

function abrirModal(){
    modal.style.opacity = 1;
    modal.style.zIndex = 1;
    document.body.style.overflow = "hidden";
}

function fechaModal(){
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
    document.body.style.overflow = "scroll";
    video.setAttribute('src', video.getAttribute('src'));
}
