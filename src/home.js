export const homePage = function() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const presentation = document.createElement('p');

    title.textContent = 'Minimalist resto';
    presentation.innerHTML = `Welcome to <em>minimalist</em>. A place where <em>less is <strong>more</strong></em>.`

    content.append(title);
    content.append(presentation);
}