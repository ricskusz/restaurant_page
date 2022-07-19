import './style.css';
import burger1 from'./images/baconburger.jpg'
import burger2 from'./images/tastyburger.jpg'
import burger3 from'./images/cheeseburger.jpg'
import pizza1 from'./images/mozarella.jpg'
import pizza2 from'./images/pepperonipizza.jpg'
import pizza3 from'./images/tomatopizza.jpg'


function foods(){

    const cards = [];

    const allImages = [
        burger1,
        burger2,
        burger3,
        pizza2,
        pizza1,
        pizza3
    ]

    const foodNames = [
        'Bacon Burger',
        'Tasty Burger',
        'Cheese Burger',
        'Pepperoni Pizza',
        'Pizza Mozarella',
        'Pizza Tomato'
    ];

    const descriptions = [
        'Tasty burger with tasty bacon',
        'Tasty and fresh burger',
        'Tasty burger with cheese',
        'Tasty pizza with pepperoni',
        'Tasty pizza with mozarella',
        'Tasty pizza with tomato'
    ];

    const price = [
        '5$',
        '10$',
        '5$',
        '20$',
        '25$',
        '20$'
    ]

    const foodCard = (img, foodname, description, price) => {
        return{img, foodname, description, price};
    }

    for(let i = 0; i < foodNames.length; i++){
        cards.push(foodCard(allImages[i], foodNames[i], descriptions[i], price[i]));
    }

    return cards;
}

function generateCards(menuName, container, foodCollection){
    for(let i = 0; i < 1; i++){
        const title = document.createElement('div');
        container.appendChild(title);
        title.classList.add('menu-title');
        title.textContent = menuName;
        var food_card_container = document.createElement('div');
        food_card_container.classList.add('food-card-container');

        //currently there is 3 pizza and 3 burger i know there is a better solution 
        if(menuName == "Pizza"){
            var startIndex = 3;
            var border = foodCollection.length;
        }else{
            var startIndex = 0;
            var border = foodCollection.length - 3;
        }
        for(let j = startIndex; j < border; j++){
            const card = document.createElement('div');
            card.classList.add('food-card');
            const pictureContainer = document.createElement('div');
            pictureContainer.classList.add('picture');
            const img = document.createElement('img');
            img.src = foodCollection[j].img;
            pictureContainer.appendChild(img);
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description');
            const food_name = document.createElement('div');
            food_name.classList.add('food-name');
            food_name.textContent = foodCollection[j].foodname;
            const food_description = document.createElement('div');
            food_description.classList.add('description');
            food_description.textContent = foodCollection[j].description;
                
            descriptionContainer.appendChild(food_name);
            descriptionContainer.appendChild(food_description);

            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = foodCollection[j].price;

            card.appendChild(pictureContainer);
            card.appendChild(descriptionContainer);
            card.appendChild(price);

            food_card_container.appendChild(card);
        }
    }

    return food_card_container;
}

function menuPage(){
    const foodCollection = foods();
    const container = document.createElement('div');
    container.classList.add('menu-container');

    // burgers
    container.appendChild(generateCards("Burgers", container, foodCollection));
    // pizza
    container.appendChild(generateCards("Pizza", container, foodCollection));

    return container;
}

export default menuPage;