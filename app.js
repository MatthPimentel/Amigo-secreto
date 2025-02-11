//array para armazenar nomes
let amigos = [];

//funçao para adicionar nomes a lista
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;
//Se o campo estiver vazio, pedirá para digitar um nome
    if (nome === '') {
        return alert('Digite um nome');        
    }
//se digitar um nome que ja esteja na lista, pedirá para digitar outro
    if (amigos.indexOf(nome) !== -1) {
        return alert('Nomes duplicados não podem ser adicionados');        
    }
//o termo push acrescenta o que foi digitado ao array
    amigos.push(nome);
    atualizarListaDeAmigos();
}

// Limpar o campo de entrada após adicionar o amigo
document.getElementById('amigo').value = ""

//funçao para atualizar a lista 
function atualizarListaDeAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

//funçao para sortear nome
function sortearAmigo() {
    if (amigos.length === 0) {
        return alert('Adicione amigos antes de sortear');
    }

    const sorteio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[sorteio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li>' + amigoSorteado + '</li>';
}
