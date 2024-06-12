const counterElement = document.getElementById('counter');
const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

let counter = 100;

function counterIncrementer() {
    counterElement.innerText = counter;
    counter--;
    if (counter < 1) {
        counter = 100;
    }
}

function breathAnimation() {
    text.innerText = 'Breathe in';
    text.style.textShadow = '1px 1px 5px yellow';
    text.style.color = 'white';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';
        text.style.color = 'orange';
        container.className = 'container grow';
        setTimeout(() => {
            text.innerText = 'Breathe out';
            text.style.color = 'white';
            text.style.textShadow = '1px 1px 5px blue';
            container.className = 'container grow';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

counterIncrementer();
breathAnimation();
setInterval(() => {
    breathAnimation();
    counterIncrementer();
}, totalTime);
