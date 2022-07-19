import './style.css';
import imageSrc from './images/main.jpg';

function homePage(){
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    const motto = document.createElement('div');
    motto.classList.add('motto');

    const motto_text_container = document.createElement('div');
    motto_text_container.classList.add('motto-text-container');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Example restaurant";

    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ullamcorper nulla, nec dapibus justo mollis in. Nunc porttitor, sem suscipit condimentum vehicula, velit eros semper lacus, non cursus sapien erat sed justo. Nulla ultrices magna id mauris sagittis bibendum.";

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button');
    const button = document.createElement('button');
    button.setAttribute('id', 'start');
    button.textContent = "Get Started"
    buttonContainer.appendChild(button);

    motto_text_container.appendChild(title);
    motto_text_container.appendChild(text);
    motto_text_container.appendChild(buttonContainer);

    motto.appendChild(motto_text_container);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');
    const image = document.createElement('img');
    image.src = imageSrc;
    imageContainer.appendChild(image);

    pageContent.appendChild(motto);
    pageContent.appendChild(imageContainer);

    return pageContent;
}


export default homePage;