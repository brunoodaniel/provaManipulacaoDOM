//FILMES ALOCADOS

function extrairFilmesAlocados() {
    var section = document.querySelector('section');
    var novaTabela = document.createElement('table');
    var novaTbody = document.createElement('tbody');
    var cabecalho = document.createElement('header')
  
    var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
  
    linhasLocacoes.forEach((linha) => {
        if (linha.children[1].innerText === "") {
  
            var linhaFilme = document.createElement('tr');
  
            var novaCelulaTitulo = document.createElement('td');
            novaCelulaTitulo.innerText = linha.children[3].innerText;
  
            var novaCelulaCliente = document.createElement('td');
            novaCelulaCliente.innerText = linha.children[2].innerText;
  
            linhaFilme.appendChild(novaCelulaTitulo);
            linhaFilme.appendChild(novaCelulaCliente);
  
            novaTbody.appendChild(linhaFilme);
        }
    });

    const h1 = document.createElement('h1')
    h1.innerText = "FILMES LOCADOS"
    h1.style.background = "#000000"
    cabecalho.appendChild(h1)
    novaTabela.appendChild(cabecalho)
    novaTabela.appendChild(novaTbody);
    section.appendChild(novaTabela);
    
  }
  
  extrairFilmesAlocados();


//FILMES EM ESTOQUE

function extrairFilmesEmEstoque() {
    var section = document.querySelector('section');
    var novaTabela = document.createElement('table');
    var novaTbody = document.createElement('tbody');
    var cabecalho = document.createElement('header')
  
    var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
  
    linhasLocacoes.forEach((linha) => {
        if (linha.children[1].innerText !== "") {
  
            var linhaFilme = document.createElement('tr');
  
            var novaCelulaTitulo = document.createElement('td');
            novaCelulaTitulo.innerText = linha.children[3].innerText;
  
            var novaCelulaCliente = document.createElement('td');
            novaCelulaCliente.innerText = linha.children[2].innerText;
  
            linhaFilme.appendChild(novaCelulaTitulo);
            linhaFilme.appendChild(novaCelulaCliente);
  
            novaTbody.appendChild(linhaFilme);
        }
    });
    const h1 = document.createElement('h1')
    h1.innerText = "FILMES EM ESTOQUE"
    h1.style.background = "#000000"
    cabecalho.appendChild(h1)
    novaTabela.appendChild(cabecalho)
    novaTabela.appendChild(novaTbody);
    section.appendChild(novaTabela);
  }
  
  extrairFilmesEmEstoque();






//ALUGAR FILME 

var tabelaFilmes = document.querySelector('table:nth-of-type(2) tbody');

var formulario = document.createElement('form');
formulario.id = 'formularioFilme';

var campos = ['Data locacao', 'Data devolucao', 'Cliente', 'Filme a ser locado'];
campos.forEach(function(campo) {
    var label = document.createElement('label');
    label.textContent = campo + ': ';

    var input = document.createElement('input');
    input.type = 'text';
    input.name = campo.toLowerCase().replace(/\s+/g, '');

    formulario.appendChild(label);
    formulario.appendChild(input);
    formulario.appendChild(document.createElement('br'));
});

var botaoEnviar = document.createElement('button');
botaoEnviar.textContent = 'Adicionar Filme';
botaoEnviar.type = 'submit';

formulario.appendChild(botaoEnviar);

document.body.appendChild(formulario);

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    var dataLocacao = this.querySelector('input[name=datalocacao]').value;
    var dataDevolucao = this.querySelector('input[name=datadevolucao]').value;
    var cliente = this.querySelector('input[name=cliente]').value;
    var filme = this.querySelector('input[name=filmeaserlocado]').value;

    var novaLinha = document.createElement('tr');
    novaLinha.innerHTML = '<td>' + dataLocacao + '</td><td>' + dataDevolucao + '</td><td>' + cliente + '</td><td>' + filme + '</td>';

    tabelaFilmes.appendChild(novaLinha);

    this.reset();
});

//PINTAR AS LINHAS

var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
  
    linhasLocacoes.forEach((linha) => {
        if (linha.children[1].innerText === "") {
  
           linha.style.background = "red"
        }
});


var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
  
    linhasLocacoes.forEach((linha) => {
        if (linha.children[1].innerText !== "") {
  
           linha.style.background = "green"
        }
});
   
    
//EU TENTEI FAZER PRA TABELA DE CIMA, MAS NÃO FUNCIONOU PQ ACABOU O TEMPO E A LÓGICA FICOU ASSIM:
//VE SE DA PRA CONSIDERAR O CODIGO DE CIMA OU O CODIGO DE BAIXO POR FAVOR :(





/*






var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
  
    linhasLocacoes.forEach((linha) => {
        if (linha.children[1].innerText === "") {
  
            var filmesss = document.querySelectorAll('table:nth-of-type(1) tbody tr');

            filmesss.forEach((filme) => {
                if (linha.children[3].innerText == filme.children[2].innerText){
                    filme.style.background = "red"
                }
            })
        }
        else{
            filme.style.background = "green"
        }
});









*/
//QUESTÃO EXTRA      

//PROFESSOR AS OUTRAS QUE EU FIZ EU NÃO MEXI DE ACORDO COM A SUA ORIENTAÇÃO, SÓ FIZ A QUESTÃO EXTRA POIS NÃO TINHA DADO TEMPO.


var linhasLocacoes = document.querySelectorAll('table:nth-of-type(2) tbody tr');
linhasLocacoes.forEach((linha) => {
    var botaoDevolucao = document.createElement('button');
    botaoDevolucao.textContent = 'Devolver';
    botaoDevolucao.onclick = function() {
        devolverFilme(linha);
    };
    linha.appendChild(botaoDevolucao);
});

function devolverFilme(linhaLocacao) {
    var filmeDevolvido = linhaLocacao.children[3].innerText; 
    var dataAtual = new Date().toLocaleDateString(); 

 
    linhaLocacao.children[1].innerText = dataAtual;

    
    linhaLocacao.style.background = "green";

    
    var linhasFilmes = document.querySelectorAll('table:nth-of-type(1) tbody tr');
    linhasFilmes.forEach((linhaFilme) => {
        if (linhaFilme.children[0].innerText === filmeDevolvido) {
            linhaFilme.style.background = "green"; 
        }
    });

    
    atualizarCartoesQuantitativos();
}


function atualizarCartoesQuantitativos() {
    var filmesDisponiveis = document.querySelectorAll('table:nth-of-type(1) tbody tr').length;
    var filmesLocados = document.querySelectorAll('table:nth-of-type(2) tbody tr').length;

    
    document.getElementById('quantidadeDisponiveis').textContent = filmesDisponiveis;
    document.getElementById('quantidadeLocados').textContent = filmesLocados;
}