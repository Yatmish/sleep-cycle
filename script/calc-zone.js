const selectionHour = document.getElementsByClassName('selectionHour')[0];
const execTimeBtn = document.getElementById('calculateButton');
const output_area = document.getElementsByClassName('time-container')[0];
const output_header = document.getElementById('output-header');

let description = document.getElementById('description-output');

let userChoose = document.getElementsByClassName('selectionToggle')[0];

function ifIWantToWakeUpAt(start, desire, code) {
    start = start.split(":");
    desire = desire.split(":");
    let startDate = new Date(0, 0, 0, start[0], start[1], 0);
    let endDate = new Date(0, 0, 0, desire[0], desire[1], 0);

    if (code == 1) {
        let diff = endDate.getTime() - startDate.getTime();
        let hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        let minutes = Math.floor(diff / 1000 / 60);

        if (hours < 0)
            hours = hours + 24;

        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    } else {
        let sum = `${endDate.getHours() + startDate.getHours()}:${endDate.getMinutes() + startDate.getMinutes()}`;
        
        let hours = sum.split(':')[0];
        let minutes = sum.split(":")[1];

        if (hours > 24) {
            hours -= 24
        }

        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }
}

const whatTimeGoToBed = {};

const whatTimeToWakeUp = {};

for (let i = 0; i < selectionHour.childElementCount; i++){
    let hour = selectionHour[i].text;
    whatTimeGoToBed[hour] = [ifIWantToWakeUpAt('9:15', hour, 1), ifIWantToWakeUpAt('7:45', hour, 1), ifIWantToWakeUpAt('6:15', hour, 1), ifIWantToWakeUpAt('4:45', hour, 1)];

    whatTimeToWakeUp[hour] = [ifIWantToWakeUpAt('9:00', hour, 2), ifIWantToWakeUpAt('7:30', hour, 2), ifIWantToWakeUpAt('6:00', hour, 2), ifIWantToWakeUpAt('4:30', hour, 2)];
    
}

execTimeBtn.addEventListener('click', () => {
    if (userChoose.value == 1) {
        output_header.innerHTML = 'GO TO BED TIMES';
        description.innerHTML = `It takes the average human about 15 minutes to fall asleep.
            To wake up refreshed at ${selectionHour.value}, you should go to bed at one of the following`;
        
        for (let i = 0; i < output_area.childElementCount; i ++){
            output_area.children[i].innerHTML = whatTimeGoToBed[selectionHour.value][i];
        };
    } else {
        output_header.innerHTML = 'WAKE UP TIMES';
        description.innerHTML = `It takes the average human about 15 minutes to fall asleep.;
            If you go to bed at ${selectionHour.value}, you should wake up at one of the following`;
        
        for (let i = 0; i < output_area.childElementCount; i ++){
            output_area.children[i].innerHTML = whatTimeToWakeUp[selectionHour.value][i];
        };
    };
}
);