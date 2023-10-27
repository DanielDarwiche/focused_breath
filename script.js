console.log('This is made thanks to Brad Traversy from Traversy Media : https://www.youtube.com/watch?v=l-1ZrU6avzI&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=49');

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe in';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'H o l d';

        setTimeout(() => {
            text.innerText = 'Breathe out';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);//run it every seven seconds

//skall ändra till hold efter breathe out
//skall ändra till lite längre secunder
//lite mindre cirkel => för mobilen ju!
//input i hur många sekunder? 