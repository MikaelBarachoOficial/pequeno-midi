const teclas = document.querySelectorAll('.tecla');
const audios = document.querySelectorAll('audio');

teclas.forEach(tecla => {
  tecla.addEventListener('click', () => {
    const audioId = tecla.getAttribute('data-audio');
    const audio = document.querySelector(`audio[data-audio="${audioId}"]`);
    
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});
