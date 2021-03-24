const activeButton = document.getElementById('calculateButton');
const inputZone = document.getElementById('input-zone');
const outputZone = document.getElementById('output-zone');
const goBackBtn = document.getElementById('calculate-again');


activeButton.addEventListener('click', () => {
    inputZone.style.animation = 'fadeOut ease 0.8s infinite';

    outputZone.style.animation = 'fadeIn ease 0.8s';

    setTimeout(() => {inputZone.style.display = 'none'}, 700);
    setTimeout(() => {outputZone.style.display = 'block'}, 700);
});

goBackBtn.addEventListener('click', () => {
    outputZone.style.animation = 'fadeOut ease 0.8s infinite';

    inputZone.style.animation = 'fadeIn ease 0.8s';

    setTimeout(() => {inputZone.style.display = 'block'}, 700);
    setTimeout(() => {outputZone.style.display = 'none'}, 700);
});