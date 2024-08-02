let pinduricoCruzAberto = false;
let pinduricoMeioAberto = false;
let pinduricoExtraAberto = false;

export function inverterPinduricos(pindurico) {
    let pinduricoAberto;
    switch(pindurico){
        case 'cruz':
            pinduricoAberto = pinduricoCruzAberto;
        break;
        case 'centro':
            pinduricoAberto = pinduricoMeioAberto;
        break;
        case 'extra':
            pinduricoAberto = pinduricoExtraAberto;
        break;
    }

    let seta = document.getElementById(`seta-${pindurico}`);
    let op = document.getElementById(`op-${pindurico}`);
    let divs = op.querySelectorAll('div');

    if (pinduricoAberto) {
        op.style.height = '12vh';
        op.style.bottom = '0';
        op.style.opacity = '0';

        seta.style.clipPath = 'polygon(0 45%, 50% 25%, 100% 45%, 100% 55%, 50% 35%, 0 55%)';

        divs.forEach(div => {            
            div.style.opacity = '0';
            div.style.position = 'absolute';
        });
    } else { 
        op.style.height = '65vh';
        op.style.bottom = '16vh';
        op.style.zIndex = '5';
        op.style.opacity = '1';

        seta.style.clipPath = 'polygon(0 45%, 50% 65%, 100% 45%, 100% 55%, 50% 75%, 0 55%)';

        divs.forEach(div => {
            div.style.position = 'relative';
            div.style.marginTop = '1vw';
            div.style.opacity = '1';
        });

    }

    switch(pindurico){
        case 'cruz':
            pinduricoCruzAberto = !pinduricoAberto;
        break;
        case 'centro':
            pinduricoMeioAberto = !pinduricoAberto;
        break;
        case 'extra':
            pinduricoExtraAberto = !pinduricoAberto;
        break;
    }
}

export function createPindurico(pindurico, ops){

    let caixa = document.getElementById(`${pindurico}-caixa`);
    let divSelecionada = document.createElement('div');
    divSelecionada.style.backgroundColor = ops[0];
    divSelecionada.id = `${pindurico}-selecionada`;
    divSelecionada.className = 'op-selecionado';
    caixa.appendChild(divSelecionada);


    let opsDiv = document.getElementById(`op-${pindurico}`);
    let opSelecionada = document.getElementById(`${pindurico}-selecionada`);
    let opApresentation = document.getElementById(`produto-pindurico-${pindurico}`)
    opApresentation.style.backgroundColor = ops[0];

    for (let i = 0; i < ops.length ; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = ops[i];

        div.addEventListener('click', ()=>{
            opSelecionada.style.backgroundColor = ops[i];
            opApresentation.style.backgroundColor = ops[i];
            inverterPinduricos(pindurico);
        });

        opsDiv.appendChild(div);
    }
}