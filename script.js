const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];


const itemTemplate = document.getElementById('item-template');
const shopItemsContainer = document.getElementById('shop-items');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const nothingFound = document.getElementById('nothing-found');


function renderItems(itemsToRender) {
    shopItemsContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом
    nothingFound.textContent = ''; // Скрываем сообщение "Ничего не найдено"

    if (itemsToRender.length === 0) {
        nothingFound.textContent = 'Ничего не найдено';
        return;
    }

    itemsToRender.forEach(item => {
        const itemClone = itemTemplate.content.cloneNode(true);
        const h1 = itemClone.querySelector('h1');
        const p = itemClone.querySelector('p');
        const img = itemClone.querySelector('img');
        const priceSpan = itemClone.querySelector('.price');
        const tagsDiv = itemClone.querySelector('.tags');

        h1.textContent = item.title;
        p.textContent = item.description;
        img.src = item.img;
        priceSpan.textContent = item.price;
        item.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag');
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });

        shopItemsContainer.appendChild(itemClone);
    });
}

renderItems(items);


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm));
    renderItems(filteredItems);
});