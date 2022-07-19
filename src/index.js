import './style.css';
import navBar from './navbar.js';
import homePage from './homepage.js';
import menuPage from './menuPage.js';
import aboutUsPage from './aboutus.js';

const content = document.querySelector('#content');

// default page is the home page
content.appendChild(navBar());
content.appendChild(homePage());

const menuItems = document.querySelectorAll('li');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.textContent === "Home"){
            content.removeChild(content.lastChild);
            content.appendChild(homePage());
        }
        if(e.target.textContent === "Menu"){
            content.removeChild(content.lastChild);
            content.appendChild(menuPage());
        }
        if(e.target.textContent === "Contact"){
            content.removeChild(content.lastChild);
            content.appendChild(aboutUsPage());
        }
    })
})

