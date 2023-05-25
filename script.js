function comprar() {

  //Atribuindo valor a varivel
    var produtoSelecionado = document.getElementById('produto').value;
    var quantidade = parseInt(document.getElementById('quantidade').value);


    // Verificar se a quantidade está vazia
    if (document.getElementById('quantidade').value === '') {
      alert("Por favor, informe a quantidade.");
      return;
    }
    quantidade = parseInt(quantidade);

    var tabelaProdutos = document.getElementById('produtos');
    var linhas = tabelaProdutos.getElementsByTagName('tr');


    //Fazendo um for para poder realiza as compras, iniciando com 1 pq o 0 é simplesmente os nomes da coluna que ficam em cima da tabela
    for (var i = 1; i < linhas.length; i++) {

      
      var nomeProduto = linhas[i].getElementsByTagName('td')[0].innerText;// se  for incializado em 0 ele quebra pq entra como Th 
      var precoProduto = parseFloat(linhas[i].getElementsByTagName('td')[1].innerText); // coluna de preço
      var quantidadeDisponivel = parseInt(linhas[i].getElementsByTagName('td')[2].innerText); //coluna de Quantidade
      
      if(produtoSelecionado === nomeProduto){ //Faz a verificação se o nome do produto é igual ao selecionado

        if (quantidade > quantidadeDisponivel) { // se n tiver qts sufi, ele retorna um alert
          alert("Quantidade insuficiente disponível.");
          return;
        }
  
        var subtotal = precoProduto * quantidade; 
        var listaCompras = document.getElementById('compras'); //a Ul entra aqui
  
        // Criar um novo item de compra na lista
        var novoItem = document.createElement('li');
        novoItem.innerHTML = quantidade + ' ' + nomeProduto + ' - Subtotal: R$ ' + subtotal.toFixed(2);
        listaCompras.appendChild(novoItem); //ele passa a UL como o child da tah UL 
  
        // Atualizar a quantidade disponível do produto na tabela
        quantidadeDisponivel -= quantidade;
        linhas[i].getElementsByTagName('td')[2].innerText = quantidadeDisponivel; //aqui ele atualiza a tabela 
  
        // Limpar os campos do formulário
        document.getElementById('produto').selectedIndex = 0;
        document.getElementById('quantidade').value = '';
  
        return;
      }      
    }

  alert("Produto não encontrado.");
}
