import { attMenu } from './js/menu.js';
import { inverterPinduricos } from './js/pindurico.js';

import { createCores } from './js/seletores.js';
import { createCorrentes } from './js/seletores.js';
import { createPindurico } from './js/pindurico.js';

import { cores } from './js/db/cores.js';
import { correntes } from './js/db/correntes.js';

import { pindurico_cruz } from './js/db/pindurico_cruz.js';
import { pindurico_centro } from './js/db/pindurico_centro.js';
import { pindurico_extra } from './js/db/pindurico_extra.js';

import {sendMessage} from './js/mensagem.js';

import { expandCompress } from './js/seletores.js';
import { showCorrentes } from './js/seletores.js';
import { showStones } from './js/seletores.js';

import { closePinduricos } from './js/pindurico.js';

window.attMenu = () => attMenu(closePinduricos);
window.sendMessage = sendMessage;
window.inverterPinduricos = inverterPinduricos;

window.expandCompress = expandCompress;
window.showCorrentes = showCorrentes;
window.showStones = showStones;

document.addEventListener("DOMContentLoaded", function () {
    createCores(cores);
    createCorrentes(correntes);
    
    createPindurico('cruz', pindurico_cruz);
    createPindurico('centro', pindurico_centro);
    createPindurico('extra', pindurico_extra);
});
