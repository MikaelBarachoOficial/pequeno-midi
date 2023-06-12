const teclas = document.querySelectorAll('.tecla')

teclas.forEach(tecla => {
    tecla.addEventListener('click', evento => {
      const som = document.querySelector(`#som_${evento.target.classList[1]}`)
      som.currentTime = 0
      som.play()
    })
  })