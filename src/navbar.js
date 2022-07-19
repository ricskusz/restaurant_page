import './style.css';

function navBar(){
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const ul = document.createElement('ul');
    const homeOption = document.createElement('li');
    homeOption.textContent = "Home";
    const menuOption = document.createElement('li');
    menuOption.textContent = "Menu";
    const contactOption = document.createElement('li');
    contactOption.textContent = "Contact";

    ul.appendChild(homeOption);
    ul.appendChild(menuOption);
    ul.appendChild(contactOption);

    nav.appendChild(ul);

    return nav;
}

export default navBar;