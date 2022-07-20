// Creo un arrey contenente le foto da stampare nello slideshow
const images = [
    {
        "url": 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        "title": 'Svezia',
        "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },


    {
        "url": 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        "title": 'Perù',
        "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },


    {
        "url": 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        "title": 'Chile',
        "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        "url": 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        "title": 'Argentina',
        "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        "url": 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        "title": 'Colombia',
        "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    }
];


let imgUrl;
let imagesBox = document.querySelectorAll(".images");


for (i = 0; i < images.length; i++) {
    imgUrl = images[i].url;


    imagesBox[i].innerHTML = `<img class="image" src="${imgUrl}">`; 
};
const imgContainerDom = document.querySelector('.img-container');


// Imposto una variabile in cui dichiaro che l'img che sarà visibile sarà in posizione 0
let imgShow = 0;


let imagesDom = document.querySelectorAll(".image");


// Aggiungo all'elemento in posizione 0 contenuto in img-container la classe "show" che lo renderà visibile
imagesDom[imgShow].classList.add('show');


// Richiamo il pulsante 'up' dall'html
const btnUp = document.querySelector('.up');


// Aggiungo un event listener al pulsante 'up' in modo tale da poterci associare un'azione
btnUp.addEventListener('click',
    function () {
        // Vado all'elemento in posizione 0 e rimuovo la classe "show"
        imagesDom[imgShow].classList.remove('show');


        // Incremento il valore (la posizione) di imgShow (quindi dell'img che dovrà essere visibile)
        imgShow++;


        // Aggiungo nuovamente la classe "show" all'elemento incrementato di 1
        imagesDom[imgShow].classList.add('show');
    }
);


// Faccio lo stesso procedimento per il pulsante 'down'
const btnDown = document.querySelector('.down');


btnDown.addEventListener('click',
    function () {
        imagesDom[imgShow].classList.remove('show');
        imgShow--;
        imagesDom[imgShow].classList.add('show');
    }
);