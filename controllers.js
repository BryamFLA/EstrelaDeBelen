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

window.attMenu = attMenu;
window.sendMessage = sendMessage;
window.inverterPinduricos = inverterPinduricos;

document.addEventListener("DOMContentLoaded", function () {
    createCores(cores);
    createCorrentes(correntes);
    
    createPindurico('cruz', pindurico_cruz);
    createPindurico('centro', pindurico_centro);
    createPindurico('extra', pindurico_extra);
});
