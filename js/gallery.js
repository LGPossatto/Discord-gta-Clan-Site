let imgTn = [
    "/images/gallery-imgs/city-alive1 4.jpg",
    "/images/gallery-imgs/city-alive2 1.jpg",
    "/images/gallery-imgs/city-alive3 1.jpg",
    "/images/gallery-imgs/city-alive4 2.jpg",
    "/images/gallery-imgs/city-alive5 2.jpg",
    "/images/gallery-imgs/city-alive6 3.jpg",
    "/images/gallery-imgs/city-alive7 2.jpg",
    "/images/gallery-imgs/city-alive8 1.jpg",
    "/images/gallery-imgs/city-alive9 1.jpg",
    "/images/gallery-imgs/play-group3 2.jpg",
    "/images/gallery-imgs/play-group2 1.jpg",
    "/images/gallery-imgs/neon-club1 1.jpg",
    "/images/gallery-imgs/neon-club2 1.jpg",
    "/images/gallery-imgs/neon-club3 1.jpg",
    "/images/gallery-imgs/neon-club4 4.jpg",
    "/images/gallery-imgs/neon-club5 1.jpg",
    "/images/gallery-imgs/neon-club6 3.jpg",
    "/images/gallery-imgs/play-group5 2.jpg",
    "/images/gallery-imgs/play-event1 1.jpg",
    "/images/gallery-imgs/play-event3 3.jpg",
    "/images/gallery-imgs/play-event4 2.jpg",
    "/images/gallery-imgs/play-event5 2.jpg",
    "/images/gallery-imgs/play-event2 4.jpg",
    "/images/gallery-imgs/play-event6 2.jpg",
    "/images/gallery-imgs/play-group6 1.jpg",
    "/images/gallery-imgs/play-group1 4.jpg",
    "/images/gallery-imgs/city-alive10 1.jpg",
    "/images/gallery-imgs/city-alive11 1.jpg",
    "/images/gallery-imgs/play-group4 1.jpg",
    "/images/gallery-imgs/play-group7 1.jpg",
];
    
let galleryGrid = document.querySelector('#gallery-grid');    
for (let imgUrl of imgTn){
    let newImg = document.createElement('div');
    let newImgSize = imgUrl.slice(-5, -4);
    console.log(newImgSize);
    newImg.style.backgroundImage = `url("${imgUrl}")`;

    switch(newImgSize){
        case('1'):
            newImg.classList.add('card-wide');
            break;
        case('2'):
            newImg.classList.add('card-small');
            break;
        case('3'):
            newImg.classList.add('card-tall');
            break;
        case('4'):
            newImg.classList.add('card-big');
            break;
    }

    galleryGrid.appendChild(newImg);
}