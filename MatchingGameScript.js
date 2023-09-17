let numberOfFaces = 5;
let attemptCount = 0;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');


function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'stitch.png';


        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);

    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;
    attemptCount += 1;

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    generateFaces();
    alert('Great job!\nContinue to the Next Level!');
}

function gameOver() {
    alert('Game Over!\nNumber of Attempts: ' + attemptCount);
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);

}

// Call generateFaces function when the webpage is loaded (but is already in the <body onload="generateFaces()">)
//window.addEventListener('load', generateFaces);



