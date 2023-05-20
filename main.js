document.getElementById('meu-formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var campoA = document.getElementById('campo-a').value;
    var campoB = document.getElementById('campo-b').value;
    
    
    if (parseInt(campoB) > parseInt(campoA)) {
      document.getElementById('mensagem-validacao').textContent = 'Formulário válido!';
      document.getElementById('mensagem-validacao').style.color = 'green';
    } else {
      document.getElementById('mensagem-validacao').textContent = 'Formulário inválido!';
      document.getElementById('mensagem-validacao').style.color = 'red';
    }
  });