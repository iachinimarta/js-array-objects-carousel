const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// Seleziono il container dove voglio aggiungere l'elemento
const imgContainerDom = document.querySelector('.img-container');
const thumbsContainerDom = document.querySelector('.thumbs-container');

images.forEach((image, index) => {
        // Dentro img-container vado a inserire il div contenente le img da stampare e al posto di src metto il nome che ho dato all array così è dinamico
        imgContainerDom.innerHTML +=    `<div class="images"><h1 class="item-title">${image.title}</h1><p class="item-description">${image.description}</p><img class="image" src="${image.url}"></div>`;

        thumbsContainerDom.innerHTML += `<div class="thumb"><img src="${image.url}"></div>`;
});

// Imposto una variabile in cui dichiaro che l'img che sarà visibile(active) sarà in posizione 0
let active = 0;

// Richiamo tutti gli elementi in img-container che hanno la classe "images"
let imagesList = document.getElementsByClassName('images');

// Aggiungo all'elemento in posizione 0 contenuto in img-container la classe "show" che lo renderà visibile
imagesList[active].classList.add('show');

const thumbList = document.querySelectorAll('.thumb');
thumbList[active].classList.add('active');

for (let i = 0; i < thumbList.length; i++) {
    thumbList[i].style.height = `calc(100% / ${images.length})`;
}

const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

// Aggiungo un event listener al pulsante 'up' in modo tale da poterci associare un'azione
btnUp.addEventListener('click',
    function () {
        // Vado all'elemento in posizione 0 e rimuovo la classe "show"
        imagesList[active].classList.remove('show');
        thumbList[active].classList.remove('active');

        if (active == images.length - 1) {
            active = 0
        } else {
            active++;
        }

        // Aggiungo nuovamente la classe "show" all'elemento incrementato di 1
        imagesList[active].classList.add('show');
        thumbList[active].classList.add('active');
    }
);

// Faccio lo stesso procedimento per il pulsante 'down'

btnDown.addEventListener('click',
    function () {
        imagesList[active].classList.remove('show');
        thumbList[active].classList.remove('active');
        
        if (active == 0) {
            active = images.length - 1;
        } else {
            active--;
        }

        imagesList[active].classList.add('show');
        thumbList[active].classList.add('active');
    }
);