const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const buttonscore1 = document.querySelector('#button-score1');
const buttonscore2 = document.querySelector('#button-score2');
const buttonrst = document.querySelector('#button-rst');
const select = document.querySelector('#select');
const result = document.querySelector('#result');
let point1 = 0;
let point2 = 0;
let winPoint = false;
let maxPoint = 0;


function disabled() {
    if (maxPoint === 0) {
        buttonscore1.disabled = true;
        buttonscore2.disabled = true;
        console.log("disabled on");
    } else {
        buttonscore1.removeAttribute('disabled');
        buttonscore2.removeAttribute('disabled');
        console.log("disabled off");
    }
}

disabled();

select.addEventListener('change', () => {
    let value = select.value;
    console.log(value);
    maxPoint = parseInt(value);
    disabled();
    console.log("Data type: ", typeof winPoint);

});

buttonscore1.addEventListener('click', () => {
    console.log("diklik");
    if (!winPoint && maxPoint > 0) {
        point1 += 1;
        score1.innerText = point1;
        if (point1 === maxPoint) {
            winPoint = true;
            score1.classList.add('win');
            result.innerText = "TEAM A WINNER";
        }
    }
});

buttonscore2.addEventListener('click', () => {
    console.log("diklik");
    if (!winPoint && maxPoint > 0) {
        point2 += 1;
        score2.innerText = point2;
        if (point2 === maxPoint) {
            winPoint = true;
            score2.classList.add('win');
            result.innerText = "TEAM B WINNER";
        }
    }
});

buttonrst.addEventListener('click', () => {
    point1 = 0;
    point2 = 0;
    score1.innerText = point1;
    score2.innerText = point2;
    winPoint = false;
    score1.classList.remove('win');
    score2.classList.remove('win');
    result.innerText = "";
    console.log('reset');
});

