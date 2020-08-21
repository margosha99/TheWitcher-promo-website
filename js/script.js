const episodes = [
    {
        id: '1',
        title: 'Episode #1',
        name: 'The End\'s Beginning',
        img: "../img/episode1.png",
    },
    {
        id: '2',
        title: 'Episode #2',
        name: 'Four Marks',
        img: "../img/episode2.png",
    },
    {
        id: '3',
        title: 'Episode #3',
        name: 'Betrayer Moon',
        img: "../img/episode3.jpg",
    },
    {
        id: '4',
        title: 'Episode #4',
        name: 'Of Banquests,Bastards and Burials',
        img: "../img/episode4.jpg",
    },
    {
        id: '5',
        title: 'Episode #5',
        name: 'Bottled Appetites',
        img: "../img/episode5.jpg",
    },
    {
        id: '6',
        title: 'Episode #6',
        name: 'Rare Species',
        img: "../img/episode6.jpg",
    },
    {
        id: '7',
        title: 'Episode #7',
        name: 'Before a Fall',
        img: "../img/episode7.jpg",
    },
    {
        id: '8',
        title: 'Episode #8',
        name: 'Much More',
        img: "../img/episode8.jpg",
    }
]

var mySwiper = new Swiper('.swiper-container', {

    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints:{
        540:{
            slidesPerView:2,
        }
    }

});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header');
const swiper = document.querySelector('.swiper-wrapper');

window.addEventListener('DOMContentLoaded', function(){
    displayEpisodes(episodes);
    menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('menu-btn-active');
        menu.classList.toggle('header-active');
    });
    
});

function displayEpisodes(episodesArr){
    let displayEpisode  = episodesArr.map(function(item){
        return `
        <div class="swiper-slide">
            <div class="card episode-${item.id}">
                <span class="card-subtitle">${item.title}</span>
                <h3 class="card-title">${item.name}</h3>
            </div>        
        </div>
        `
    });
    displayEpisode = displayEpisode.join('');
    console.log(displayEpisode);
    swiper.innerHTML = displayEpisode;
}

