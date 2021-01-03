let imgTn = [
    "/images/gallery-imgs/city-alive1 4.jpg",
    "/images/gallery-imgs/city-alive2 1.jpg",
    "/images/gallery-imgs/play-group2 1.jpg",
    "/images/gallery-imgs/city-alive4 2.jpg",
    "/images/gallery-imgs/city-alive5 2.jpg",
    "/images/gallery-imgs/city-alive8 1.jpg",
/*    "/images/gallery-imgs/city-alive6 3.jpg",
    "/images/gallery-imgs/city-alive7 2.jpg",
    "/images/gallery-imgs/city-alive12 2.jpg",
    "/images/gallery-imgs/play-group3 2.jpg",
    "/images/gallery-imgs/city-alive9 1.jpg",
    "/images/gallery-imgs/city-alive14 2.jpg",
    "/images/gallery-imgs/neon-club7 1.jpg",
    "/images/gallery-imgs/neon-club1 1.jpg",
    "/images/gallery-imgs/neon-club4 4.jpg",
    "/images/gallery-imgs/neon-club5 1.jpg",
    "/images/gallery-imgs/neon-club6 3.jpg",
    "/images/gallery-imgs/city-alive15 2.jpg",
    "/images/gallery-imgs/neon-club3 1.jpg",
    "/images/gallery-imgs/play-group5 2.jpg",
    "/images/gallery-imgs/neon-club2 1.jpg",
    "/images/gallery-imgs/play-event3 3.jpg",
    "/images/gallery-imgs/play-event4 2.jpg",
    "/images/gallery-imgs/play-event2 4.jpg",
    "/images/gallery-imgs/play-event5 2.jpg",
    "/images/gallery-imgs/city-alive13 2.jpg",
    "/images/gallery-imgs/play-event6 2.jpg",
    "/images/gallery-imgs/play-event1 1.jpg",
    "/images/gallery-imgs/play-group6 1.jpg",
    "/images/gallery-imgs/play-group1 4.jpg",
    "/images/gallery-imgs/city-alive10 1.jpg",
    "/images/gallery-imgs/city-alive11 1.jpg",
    "/images/gallery-imgs/city-alive3 1.jpg",
    "/images/gallery-imgs/play-group4 1.jpg",
    "/images/gallery-imgs/play-group7 1.jpg" */
];

const imgDisplay = document.querySelector('#img-display');
const displayImg = document.querySelector('#display-img');
const galleryGrid = document.querySelector('#gallery-grid');  
let imgList = [];

const showImg = (imgIndex) => {
    imgDisplay.src = imgList[imgIndex];
    imgDisplay.setAttribute('data-index', imgIndex);
    displayImg.style.display = 'flex';
}

const closeImg = () => {
    displayImg.style.display = 'none';
}

const moveImgL = () => {
    let imgIndex = parseInt(imgDisplay.getAttribute('data-index'));
    if (imgIndex !== 0){
        imgIndex--;
    } else {
        imgIndex = imgList.length - 1;
    }
    imgDisplay.src = imgList[imgIndex];
    imgDisplay.setAttribute('data-index', imgIndex);
}

const moveImgR = () => {
    let imgIndex = parseInt(imgDisplay.getAttribute('data-index'));
    if (imgIndex !== imgList.length - 1){
        imgIndex++;
    } else {
        imgIndex = 0;
    }
    imgDisplay.src = imgList[imgIndex];
    imgDisplay.setAttribute('data-index', imgIndex);
}

document.querySelector('#close-arrow').addEventListener('click', closeImg);
document.querySelector('#btn-l').addEventListener('click', moveImgL);
document.querySelector('#btn-r').addEventListener('click', moveImgR);

let imgIndexCtrl = 0;
for (let imgUrl of imgTn){
    let imgIndex = imgIndexCtrl;
    let newImg = document.createElement('div');
    let newImgUrl = imgUrl.split(' ')[0] + '.png';
    let newImgSize = imgUrl.slice(-5, -4);

    imgList.push(newImgUrl);
    
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
    
    newImg.addEventListener('click', () => {
         showImg( imgIndex)
        });
    galleryGrid.appendChild(newImg);

    imgIndexCtrl++;
}
