function add() {
    // Q4: Alterar a imagem principal
    document.querySelector('.card-img-top').setAttribute('src', 'img/_vinicius_junior.png');

    // Remover placeholder-glow do h5 (título) e do parágrafo
    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('p.card-text').classList.remove('placeholder-glow');

    // Preencher o span do nome (primeiro span dentro de #Nome)
    const nomeSpan = document.querySelector('#Nome span:first-child');
    nomeSpan.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    nomeSpan.classList.remove('placeholder', 'col-6');
    nomeSpan.classList.add('card-text');

    // Preencher Rank
    document.getElementById('Rank').textContent = '9,5';

    // Preencher Data de Nascimento
    const dataNas = document.getElementById('Data_Nas');
    dataNas.textContent = '12/07/2000 (25 anos)';
    dataNas.classList.remove('placeholder', 'col-4');
    dataNas.classList.add('card-text');

    // Preencher Altura
    const altura = document.getElementById('Alutra');
    altura.textContent = '1,76 m';
    altura.classList.remove('placeholder', 'col-4');
    altura.classList.add('card-text');

    // Preencher Posição (ID com espaço conforme HTML original)
    const posicao = document.getElementById('Posição ');
    posicao.textContent = 'Ponta-esquerda / Atacante';
    posicao.classList.remove('placeholder', 'col-6');
    posicao.classList.add('card-text');
}
