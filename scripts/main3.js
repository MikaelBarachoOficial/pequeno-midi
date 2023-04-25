function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if(elemento && elemento.localName === 'audio'){
    elemento.play();
    }else{
        alert(`Não tem ${idElementoAudio} aqui não, espertinho`);
    }
}

const teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < teclas.length; i++) {
    
    const tecla = teclas[i];
    const instrumento = teclas[i].classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    tecla.onkeydown = evento => {
        console.log(evento.code)
        if (evento.code === 'NumpadEnter' || evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}
