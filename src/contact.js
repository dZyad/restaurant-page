export const contactPage = function() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const info = document.createElement('p');
    const extra = document.createElement('p');

    title.textContent = 'Contact.';
    info.textContent = 'Request your reservation to thisisnotareal@email.com.';
    extra.textContent = 'Address and instructions will be provided with your reservation.';

    content.append(title);
    content.append(info);
    content.append(extra);
}