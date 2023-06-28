let cardsArr = ["balrog.jpg", "witchking.jpg", "sauron.jpg", "witchking.jpg", "balrog.jpg", "ellesar.jpg", "nazgul.jpg", "nazgul.jpg", "gandalf.jpg", "sauron.jpg", "ellesar.jpg", "gandalf.jpg"];

function shuffleArray(cardsArr) {
    for (var i = cardsArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardsArr[i];
        cardsArr[i] = cardsArr[j];
        cardsArr[j] = temp;
    }
}

window.onload = shuffleArray(cardsArr);

let mySound = new Audio('sounds/correct.mp3');
let mySound2 = new Audio('sounds/miss.wav');
let mySound3 = new Audio('sounds/win.mp3');

let card0 = document.getElementById("card0");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let card10 = document.getElementById("card10");
let card11 = document.getElementById("card11");

card0.addEventListener("click", function () { cardReveal(0); });
card1.addEventListener("click", function () { cardReveal(1); });
card2.addEventListener("click", function () { cardReveal(2); });
card3.addEventListener("click", function () { cardReveal(3); });
card4.addEventListener("click", function () { cardReveal(4); });
card5.addEventListener("click", function () { cardReveal(5); });
card6.addEventListener("click", function () { cardReveal(6); });
card7.addEventListener("click", function () { cardReveal(7); });
card8.addEventListener("click", function () { cardReveal(8); });
card9.addEventListener("click", function () { cardReveal(9); });
card10.addEventListener("click", function () { cardReveal(10); });
card11.addEventListener("click", function () { cardReveal(11); });

let firstOn = false;
let counter = 0;
let firstNr;
let security = false;
let pairsLeft = 6;

function cardReveal(nr) {

    let opacityValue = $('#card' + nr).css('opacity');

    if (security == false && opacityValue != 0) {
        security = true;

        let avatar = "url(graphics/" + cardsArr[nr] + ")";
        $('#card' + nr).css('background-image', avatar);
        $('#card' + nr).addClass('cardActive');
        $('#card' + nr).removeClass('card');

        if (firstOn == false) {

            firstOn = true;
            firstNr = nr;
            security = false;
        }
        else {

            if (cardsArr[firstNr] == cardsArr[nr]) {
                setTimeout(function () { cardsHiding(firstNr, nr); }, 1000);

            }
            else {
                setTimeout(function () { cardsRestoring(firstNr, nr); }, 1000);
            }

            counter++;
            $('.counter').html('Turns used: ' + counter);
            firstOn = false;

        }

    }

}

function cardsHiding(nr1, nr2) {

    mySound.play();
    $('#card' + nr1).css('opacity', '0');
    $('#card' + nr2).css('opacity', '0');

    pairsLeft--;

    if (pairsLeft == 0) {

        $('.myHeader').css('margin-top', '200px');
        $('.board').html("<h2>Congratulations! You have made it in " + counter + " turns.</h2>");
        $('.counter').html("");

        mySound3.play();
    }

    security = false;
}

function cardsRestoring(nr3, nr4) {

    $('#card' + nr3).css("background-image", "url(graphics/reverse.jpg)");
    $('#card' + nr3).addClass('card');
    $('#card' + nr3).removeClass('cardActive');

    $('#card' + nr4).css("background-image", "url(graphics/reverse.jpg)");
    $('#card' + nr4).addClass('card');
    $('#card' + nr4).removeClass('cardActive');

    security = false;

    mySound2.play();

}

