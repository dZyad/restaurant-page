import './style.css';
import { homePage } from './home';
import { contactPage } from './contact';
import { menuPage } from './menu';

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.setAttribute('id', 'active');
homePage();

homeBtn.addEventListener('click', () => {
    clearContent();
    menuBtn.removeAttribute('id', 'active');
    contactBtn.removeAttribute('id', 'active');
    homeBtn.setAttribute('id', 'active');
    homePage();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    homeBtn.removeAttribute('id', 'active');
    contactBtn.removeAttribute('id', 'active');
    menuBtn.setAttribute('id', 'active');
    menuPage();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    homeBtn.removeAttribute('id', 'active');
    menuBtn.removeAttribute('id', 'active');
    contactBtn.setAttribute('id', 'active');
    contactPage();
})

function clearContent() {
    while(content.lastChild) {
        content.lastChild.remove();
    }
}