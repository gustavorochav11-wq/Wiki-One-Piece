
//1 - evento usando um botao que muda o tema de fundo para claro e escuro
const botao = document.getElementById('botao-tema'); //pega o botao
const icone = document.getElementById('icone-tema')
if (localStorage.getItem('tema-escolhido') === 'claro') {
    document.body.classList.add('modo-claro');
     //adicionei a nova classe "modo-claro" no css direto pelo js de forma dinamica
     icone.textContent = '☀️';
}
else{
    icone.textContent = '🌙';
}
botao.addEventListener('click', function() { //aqui decidi utilizar um listener para o nosso botao

    if (document.body.classList.contains('modo-claro')) {
        // Se estiver, tira ela (volta para o escuro)
        document.body.classList.remove('modo-claro');
        localStorage.setItem('tema-escolhido', 'escuro'); // SALVA NA MEMORIA!
        icone.textContent = '🌙';
    } else {
        // Se nao estiver, coloca ela (vai para o claro)
        document.body.classList.add('modo-claro');
        localStorage.setItem('tema-escolhido', 'claro'); // SALVA NA MEMORIA!
        icone.textContent = '☀️';

    }  
    
});
//2 - o sistema de recrutamento
let tripulacao = [ //o vetor da tripulacao,com o nome,cargo e fruta do tripulante
    {nome: "Monkey D. Luffy",cargo: "Capitão",fruta: "Hito Hito no Mi"},
    { nome: "Roronoa Zoro", cargo: "Espadachim", fruta: "Nenhuma (Haki)" },
    { nome: "Nami", cargo: "Navegador(a)", fruta: "Nenhuma" },
    { nome: "Usopp", cargo: "Atirador(a)", fruta: "Nenhuma" },
    { nome: "Sanji", cargo: "Cozinheiro(a)", fruta: "Nenhuma (Haki)" },
    { nome: "Tony Tony Chopper", cargo: "Médico(a)", fruta: "Hito Hito no Mi" },
    { nome: "Nico Robin", cargo: "Arqueólogo(a)", fruta: "Hana Hana no Mi" },

];

const formPirata = document.getElementById('form-pirata'); //guardando os elementos do html nas variaveis
const listaTripulacao = document.getElementById('listaTripulacao');
//essa funcao abaixo percorre o vetor e mostra na tela
function atualizarLista(){
    if(!listaTripulacao) return; //se nao tiver na pagina de recrutamento,ignora
    listaTripulacao.innerHTML=''; //limpa a lista antes de mostrar ela de novo
//percorrendo o vetor !!
for(let i=0;i<tripulacao.length;i++){
    const pirata = tripulacao[i]; //recebendo os dados
    //criando o elemento da lista,o <li> direto do js dinamicamente
const item = document.createElement('li');
item.style.marginBottom = "8px"; //estilizando
//exibindo o pirata recrutado,com um botao para excluir ele
item.innerHTML= `
         <strong>${pirata.nome}</strong> - <em>Cargo:</em> ${pirata.cargo} | <em>Fruta:</em> ${pirata.fruta} 
         <button onclick="removerPirata(${i})" style="margin-left: 10px; background: #e74c3c; color: white; border: none; padding: 2px 6px; cursor: pointer;">Expulsar</button>
    `;
    listaTripulacao.appendChild(item);//por fim,adicionei o elemento item na lista
 }
}
//3 - o evento de envio do formulario (lendo os dados sem recarregar a pagina)
if(formPirata){ //quando estiver em execucao
 formPirata.addEventListener('submit',function(e){ //adicionei um listener do tipo submit  quando o usuario enviar,junto com uma funcao como o parametro e (de evento) pra nos dar o "relatorio"
    e.preventDefault();//isso segura o navegador de recarregar a pagina,evitar perda de dados

    const nomeInput = document.getElementById('nomePirata').value; //guardando os valores
    const cargoSelect = document.getElementById('cargo').value;
    let frutaInput = document.getElementById('akumaPirata').value; 

    //condicao para tratar campos vazios
    if(frutaInput.trim()===''){ //esse metodo trim tira os espaços em branco na string,tanto no começo quanto no fim
        frutaInput='Nenhuma'; //se o usuario nao digitou nada,o á é marcado como "Nenhuma" automaticamente
    }
      //criei um objeto para o membro e então jogamos no vetor
     const novoMembro = {
        nome: nomeInput,
        cargo: cargoSelect,
        fruta: frutaInput
     };
        tripulacao.push(novoMembro); //novo membro adicionado no vetor

        //atualiza a lista e limpa o formulario
        atualizarLista();
        formPirata.reset();
    });
     //executa assim que a pagina carrega para mostrar os iniciais
     atualizarLista();
}
//4 - remover o membro criado,com aquele botao que haviamos criado antes
window.removerPirata = function(indice){
    tripulacao.splice(indice,1); //splice exclui,adiciona ou substitui itens no vetor,ele precisa do indice e posicao como parametros
    atualizarLista();
};