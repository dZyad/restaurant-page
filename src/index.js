import './style.css';

const content = document.querySelector('#content');

function addHome() {
    const title = document.createElement('h1');
    const presentation = document.createElement('p');

    title.textContent = 'Minimalist';
    presentation.innerHTML = `Welcome to <em>minimalist</em>. A place where <em>less is <strong>more</strong></em>.`

    content.append(title);
    content.append(presentation);
}

addHome();