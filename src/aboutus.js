import './style.css';

function aboutUsPage(){
    const container = document.createElement('div');
    container.classList.add('aboutus-container');
    const title = document.createElement('div');
    title.textContent = "About";
    title.classList.add('about-title');
    const text = document.createElement('div');
    text.classList.add('about-text');
    text.textContent = "This food is the best food! Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const acc = document.createElement('div');
    acc.classList.add('acc');
    const email = document.createElement('p');
    email.textContent = "E-mail: example@example.com";
    const phone = document.createElement('p');
    phone.textContent = "Phone: 23156478"
    acc.appendChild(email);
    acc.appendChild(phone);

    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(acc);

    return container;
}

export default aboutUsPage;