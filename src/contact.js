export const contactPage = function() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const info = document.createElement('p');

    title.textContent = 'Contact.';
    info.setAttribute('style', 'white-space: pre;');
    info.textContent = 'Request your reservation to thisisnotareal@email.com.\r\n';
    info.textContent += 'Address and instructions will be provided with your reservation.';

    content.append(title);
    content.append(info);
}