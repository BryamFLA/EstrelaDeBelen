export function sendMessage() {
    const number = '5546991241207';
    const mensagem = 'Oi, ta funcionando';
    let url;
    if (isMobileDevice()) {
        if (/Android/i.test(navigator.userAgent)) {
            // Para Android, use o esquema de intent
            url = `intent://send/${number}#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;S.text=${encodeURIComponent(mensagem)};end`;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // Para iOS, use o esquema wa.me (aplicativo do WhatsApp)
            url = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;
        } else {
            // fallback para outros dispositivos móveis
            url = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;
        }
    } else {
        // No desktop, abra o WhatsApp Web
        url = `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(mensagem)}`;
    }
    window.open(url, '_blank');
}

function isMobileDevice() {
    let resultado = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    return resultado;
}