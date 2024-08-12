export function createCores(cores) {
    const op = document.getElementById('cores');
    const cor_fundo = document.getElementById('produto-pedra');
    cor_fundo.style.backgroundColor = cores[0];

    for (let i = 0; i < cores.length; i++) {

        let div = document.createElement('div');
        div.style.backgroundColor = cores[i];

        div.addEventListener('click', () => {
            cor_fundo.style.backgroundColor = cores[i];
        });

        op.appendChild(div);
    }

    let divExtra = document.createElement('div');
    divExtra.style.height = '2vh';
    divExtra.style.backgroundColor = 'transparent';
    op.appendChild(divExtra);
}

export function createCorrentes(correntes) {
    const op = document.getElementById('correntes');
    const cor_fundo = document.getElementById('produto-corrente');
    cor_fundo.style.backgroundColor = correntes[0];

    for (let i = 0; i < correntes.length; i++) {

        let div = document.createElement('div');
        div.style.backgroundColor = correntes[i];

        div.addEventListener('click', () => {
            cor_fundo.style.backgroundColor = correntes[i];
        });

        op.appendChild(div);
    }

    let divExtra = document.createElement('div');
    divExtra.style.height = '2vh';
    divExtra.style.backgroundColor = 'transparent';
    op.appendChild(divExtra);
}

let isExpand = false;
let isLeft = false;

export function expandCompress() {
    const produtos = document.querySelectorAll('.produto');
    const pedra = document.getElementById('seletor-pedra');
    const corrente = document.getElementById('seletor-corrente');
    const icon = document.querySelector('#expand-compress i');

    if (isExpand) {
        produtos.forEach(produto => {
            produto.style.width = '75vw';
            produto.style.height = '50vh';
        });
        if (isLeft) {
            showStones();
        } else {
            showCorrentes();
        }
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    } else {
        produtos.forEach(produto => {
            produto.style.width = '98vw';
            produto.style.height = '50vh';
            produto.style.left = '1vw';
        });
        pedra.style.left = '-25vw';
        corrente.style.right = '-25vw';
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
    }
    isExpand = !isExpand;
}

export function showCorrentes() {
    const produtos = document.querySelectorAll('.produto');
    const pedra = document.getElementById('seletor-pedra');
    const corrente = document.getElementById('seletor-corrente');
    const icon = document.querySelector('#expand-compress i');

    produtos.forEach(produto => {
        produto.style.width = '75vw';
        produto.style.height = '50vh';
        produto.style.left = '1vw'
    });
    icon.classList.remove('fa-compress');
    icon.classList.add('fa-expand');
    pedra.style.left = '-25vw';
    corrente.style.right = '1vw';
    isLeft = false;
}

export function showStones() {
    const produtos = document.querySelectorAll('.produto');
    const pedra = document.getElementById('seletor-pedra');
    const corrente = document.getElementById('seletor-corrente');
    const icon = document.querySelector('#expand-compress i');

    produtos.forEach(produto => {
        produto.style.width = '75vw';
        produto.style.height = '50vh';
        produto.style.left = '24vw'
    });
    icon.classList.remove('fa-compress');
    icon.classList.add('fa-expand');
    pedra.style.left = '1vw';
    corrente.style.right = '-25vw';
    isLeft = true;
}