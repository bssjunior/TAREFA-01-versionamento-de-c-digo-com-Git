$(document).ready(function() {
    // Aplicar máscaras aos campos
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
  
    // Enviar o formulário
    $('#cadastro-form').submit(function(event) {
      event.preventDefault(); // Impedir o envio padrão do formulário
  
      // Obter os valores dos campos
      var nome = $('#nome').val();
      var email = $('#email').val();
      var telefone = $('#telefone').val();
      var cpf = $('#cpf').val();
      var endereco = $('#endereco').val();
      var cep = $('#cep').val();
  
      // Realizar o processamento ou envio dos dados
      // Aqui você pode adicionar a lógica para processar os dados do formulário ou enviá-los para um servidor
  
      // Exemplo de exibição dos valores no console
      console.log('Nome:', nome);
      console.log('E-mail:', email);
      console.log('Telefone:', telefone);
      console.log('CPF:', cpf);
      console.log('Endereço:', endereco);
      console.log('CEP:', cep);
    });
  });