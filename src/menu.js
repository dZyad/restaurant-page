import food from './media/food.jpg';

export const menuPage = function() {

    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const menuInfo = document.createElement('p');

    title.textContent = 'Menu.';
    menuInfo.textContent = 'Our meals are unique and our chef picks it with fresh ingredients. ';
    menuInfo.textContent += 'When requesting a reservation you will be asked about your food restrictions';
    const myPic = new Image(300);
    myPic.src = food;

    content.append(title);
    content.append(menuInfo);
    content.append(myPic);
}