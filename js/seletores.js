export function createCores(cores) {
    const op = document.getElementById('cores');
    const cor_fundo = document.getElementById('produto-pedra');
    cor_fundo.style.backgroundColor = cores[0];

    for (let i = 0; i < cores.length; i++) {

        let div = document.createElement('div');
        div.style.backgroundColor = cores[i];

        div.addEventListener('click', ()=>{
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

        div.addEventListener('click', ()=>{
            cor_fundo.style.backgroundColor = correntes[i];
        });

        op.appendChild(div);
    }

    let divExtra = document.createElement('div');
    divExtra.style.height = '2vh';
    divExtra.style.backgroundColor = 'transparent';
    op.appendChild(divExtra);
}