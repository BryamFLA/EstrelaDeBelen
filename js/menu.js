let isOpen = false;

export function attMenu(){
    let menu_topo = document.getElementById('menu-topo');
    let menu_meio = document.getElementById('menu-meio');
    let menu_baixo = document.getElementById('menu-baixo');

    let cartoes = document.getElementById('cartoes');

    if(isOpen){
        cartoes.style.top = "-60vw";

        menu_topo.style.rotate = '0deg';
        menu_meio.style.width = '1.5vw';
        menu_baixo.style.rotate = '0deg';

        menu_topo.style.top = '0vw';
        menu_baixo.style.top = '0vw';

    }else{
        cartoes.style.top = "0vw";

        menu_topo.style.rotate = '45deg';
        menu_meio.style.width = '0vw';
        menu_baixo.style.rotate = '-45deg';

        menu_topo.style.top = '0.48vw';
        menu_baixo.style.top = '-0.48vw';
    }

    isOpen = !isOpen;
}