console.log('This is made thanks to Brad Traversy from Traversy Media : https://www.youtube.com/watch?v=l-1ZrU6avzI&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=49');

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe in';
    text.style.color = 'white'; // Correct the color format by adding a '#' before the hex code
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';
        text.style.color = 'orange'; // Correct the color format by adding a '#' before the hex code
        container.className = 'container grow';

        setTimeout(() => {
            text.innerText = 'Breathe out';
            text.style.color = 'white'; // Correct the color format by adding a '#' before the hex code
            text.style.textShadow = '1px 1px 5px lightblue'; // Use correct property name 'textShadow'
            container.className = 'container grow';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);//run it every seven seconds

//skall ändra till hold efter breathe out
//skall ändra till lite längre secunder
//lite mindre cirkel => för mobilen ju!
//input i hur många sekunder? 