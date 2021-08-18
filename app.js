'use strict';

let attemptEl = document.getElementById('attempts');
let container = document.getElementById('');
let firstImg = document.getElementById('fImg');
let secondImg = document.getElementById('sImg');
let thirdImg = document.getElementById('thImg');
let result = document.getElementById('results');

let arrImg = ['bag.jpg', 'banana.jpg', 'breakfast.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg ', 'unicorn.jpg', 'water-can.jpg ', 'wine-glass.jpg'];

let attempt = 1;
let maxAttempt = 25;
let saveImages = [];

function Image(imgName) {

    this.imgName = imgName.split('.')[0];
    this.img = `images/${imgName}`;
    this.votes = 0;
    this.views = 0;
    saveImages.push(this);

}

for (let i = 0; i < arrImg.length; i++) {

    new Image(arrImg[i]);
}

function gitRandomImage() {

    return Math.floor(Math.random() * arrImg.length);
}

let firstIndex;
let secondIndex;
let thirdIndex;

function renderImage() {

    firstIndex = gitRandomImage();
    secondIndex = gitRandomImage();
    thirdIndex = gitRandomImage();

    while (firstIndex === secondIndex || secondIndex === thirdIndex || thirdIndex === firstIndex) {

        firstIndex = gitRandomImage();
        thirdIndex = gitRandomImage();
    }

    firstImg.setAttribute('src', saveImages[firstIndex].img)
    secondImg.setAttribute('src', saveImages[secondIndex].img);
    thirdImg.setAttribute('src', saveImages[thirdIndex].img);

    saveImages[firstIndex].views++;
    saveImages[secondIndex].views++;
    saveImages[thirdIndex].views++;
 
}
renderImage();

firstImg.addEventListener('click', clickHandler);
secondImg.addEventListener('click', clickHandler);
thirdImg.addEventListener('click', clickHandler);

function clickHandler(event) {

    if (attempt <= maxAttempt) {

        let clik = event.target.id;

        if (clik === 'fImg') {

            saveImages[firstIndex].votes++;

        }

        else if (clik === 'sImg') {

            saveImages[secondIndex].votes++

        }

        else if (clik === 'thImg') {

            saveImages[thirdIndex].votes++

        }

        renderImage();

        attempt++;

    }
}

let resultButton = document.getElementById('button');

resultButton.addEventListener('click', showResult);

function showResult() {

    for (let i = 0; i < saveImages.length; i++) {

        let liEl = document.createElement('li');

        result.appendChild(liEl);

        liEl.textContent = `${saveImages[i].imgName} has ${saveImages[i].votes} votes and  ${saveImages[i].views} views.`;

    }

}