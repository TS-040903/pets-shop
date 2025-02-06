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

function createItemElement(item) {
    const itemClone = itemTemplate.content.cloneNode(true);
    itemClone.querySelector('h1').textContent = item.title;
    itemClone.querySelector('p').textContent = item.description;
    itemClone.querySelector('img').src = item.img;
    itemClone.querySelector('.price').textContent = item.price;
    const tagsDiv = itemClone.querySelector('.tags');
    item.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
    });
    return itemClone;
}

function renderItems(itemsToRender) {
    shopItemsContainer.innerHTML = '';
    nothingFound.textContent = '';

    if (itemsToRender.length === 0) {
        nothingFound.textContent = 'Ничего не найдено';
        return;
    }

    const fragment = document.createDocumentFragment();
    itemsToRender.forEach(item => fragment.appendChild(createItemElement(item)));
    shopItemsContainer.appendChild(fragment);
}


function searchItems(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter(item => {
        return (item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.description.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm)));
    });
    renderItems(filteredItems);
}


renderItems(items);

searchButton.addEventListener('click', () => {
    searchItems(searchInput.value);
});


searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchItems(searchInput.value);
    }
});