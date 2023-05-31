$(document).ready(function() {
  carregarTarefas();

  $('#form-tarefa').submit(function(e) {
    e.preventDefault();
    adicionarTarefa();
  });

  $('#lista-tarefas').on('click', '.tarefa', function() {
    $(this).toggleClass('completed');
  });

  $('#lista-tarefas').on('click', '.delete-button', function() {
    $(this).closest('tr').remove();
    salvarTarefas();
  });

  function adicionarTarefa() {
    var nomeTarefa = $('#nome-tarefa').val();
    if (nomeTarefa.trim() !== '') {
      var tarefa = $('<tr>').addClass('tarefa');
      var tarefaNome = $('<td>').text(nomeTarefa);
      var tarefaBotao = $('<td>').append($('<button>').addClass('delete-button').text('Excluir'));
      tarefa.append(tarefaNome, tarefaBotao);
      $('#lista-tarefas').append(tarefa);
      $('#nome-tarefa').val('');
      salvarTarefas();
    }
  }

  function salvarTarefas() {
    var tarefas = [];
    $('#lista-tarefas .tarefa').each(function() {
      tarefas.push($(this).find('td:first-child').text());
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  function carregarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (tarefas !== null) {
      tarefas.forEach(function(tarefa) {
        var tr = $('<tr>').addClass('tarefa');
        var tdNome = $('<td>').text(tarefa);
        var tdBotao = $('<td>').append($('<button>').addClass('delete-button').text('Excluir'));
        tr.append(tdNome, tdBotao);
        $('#lista-tarefas').append(tr);
      });
    }
  }
});
  