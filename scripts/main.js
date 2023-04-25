document.querySelectorAll('.tecla').forEach(botao => {
    botao.addEventListener('click', () => {
      const som = document.querySelector(`#som_${botao.classList[1]}`);
      som.currentTime = 0; 
      som.play(); 
    });
  });