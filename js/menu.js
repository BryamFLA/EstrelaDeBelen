let isOpen = false;

export function attMenu(closePinduricos) {
    closePinduricos('cruz');
    closePinduricos('centro');
    closePinduricos('extra');

    let menu_topo = document.getElementById('menu-topo');
    let menu_meio = document.getElementById('menu-meio');
    let menu_baixo = document.getElementById('menu-baixo');
    let menu = document.getElementById('menu');

    let cartoes = document.getElementById('cartoes');

    let isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isOpen) {
        cartoes.style.top = "-100vw";

        menu_topo.style.rotate = '0deg';
        menu_baixo.style.rotate = '0deg';

        if (isDesktop) {
            menu_meio.style.width = '1.5vw';
            menu_baixo.style.width = '1.5vw';
            menu_topo.style.width = '1.5vw';
        } else {
            menu_topo.style.width = '6vw';
            menu_meio.style.width = '6vw';
            menu_baixo.style.width = '6vw';
        }

        menu_topo.style.top = '0vw';
        menu_baixo.style.top = '0vw';
        menu.style.zIndex = '1';
    } else {
        cartoes.style.top = "0vw";

        menu_topo.style.rotate = '45deg';
        menu_meio.style.width = '0vw';
        menu_baixo.style.rotate = '-45deg';


        if (isDesktop) {
            menu_topo.style.width = '1.5vw';
            menu_baixo.style.width = '1.5vw';

            menu_topo.style.top = '0.48vw';
            menu_baixo.style.top = '-0.48vw';
        } else {
            menu_topo.style.width = '7vw';
            menu_baixo.style.width = '7vw';

            menu_topo.style.top = '1.75vw';
            menu_baixo.style.top = '-1.75vw';
        }
        menu.style.zIndex = 11;
    }
    isOpen = !isOpen;
}