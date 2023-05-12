function paginar(id) {
  let elementoAtual = document.querySelector('.active');
  if (elementoAtual) {
    elementoAtual.classList.remove('active');
  }

  let novoElemento = document.getElementById(id);
  if (novoElemento) {
    novoElemento.classList.add('active');
  }
}