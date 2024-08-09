export function sendMessage() {
    const number = '5546991241207';
    const mensagem = 'Oi, ta funcionando';
    let url;
    if (isMobileDevice()) {
        url = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;
    } else {
        url = `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(mensagem)}`;

    }
    window.open(url, '_blank');
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}