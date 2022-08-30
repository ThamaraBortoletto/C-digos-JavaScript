let Nomes = ["Joao", "Juliana", "Ana", "Caio", "Lara"];
const mediasDosAlunos = [3, 5, 7, 9, 12];
 
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

function exibeNomeNota(nomeDoAluno) {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        posicao = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return 'O Aluno ${listaDeNotasEAlunos[0][posicao]} tem a média final ${listaDeNotasEAlunos[1][posicao]}';
    }

    else {
        return 'O Aluno procurado não existe :(';
    }
}

exibeNomeNota('João'); 