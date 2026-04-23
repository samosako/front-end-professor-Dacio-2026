function add() {
    document.querySelector('.card-img-top').setAttribute('src', 'img/_vinicius_junior.png');

    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('p.card-text').classList.remove('placeholder-glow');

    const nomeSpan = document.querySelector('#Nome span:first-child');
    nomeSpan.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    nomeSpan.classList.remove('placeholder', 'col-6');
    nomeSpan.classList.add('card-text');

    document.getElementById('Rank').textContent = '9,5';

    const dataNas = document.getElementById('Data_Nas');
    dataNas.textContent = '12/07/2000 (25 anos)';
    dataNas.classList.remove('placeholder', 'col-4');
    dataNas.classList.add('card-text');

    const altura = document.getElementById('Alutra');
    altura.textContent = '1,76 m';
    altura.classList.remove('placeholder', 'col-4');
    altura.classList.add('card-text');

    const posicao = document.getElementById('Posição ');
    posicao.textContent = 'Ponta-esquerda / Atacante';
    posicao.classList.remove('placeholder', 'col-6');
    posicao.classList.add('card-text');
}
