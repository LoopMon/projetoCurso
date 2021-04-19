const corpo = document.getElementById('corpo');
const pe = document.getElementById('perna-esquerda');
const pd = document.getElementById('perna-direita');
const bag = document.getElementById('mochila');


function alterColorOn(){
    corpo.style.backgroundColor = 'blue';
    pe.style.backgroundColor = 'blue';
    pd.style.backgroundColor = 'blue';
    bag.style.backgroundColor = 'blue';
}

function alterColorOff(){
    corpo.style.backgroundColor = 'red';
    pe.style.backgroundColor = 'red';
    pd.style.backgroundColor = 'red';
    bag.style.backgroundColor = 'red';
}
