const newOptions = document.getElementById('new-options-container');

function createNewOptions(size = 0) {
    if (window.screen['availWidth'] > size) {
        newOptions.style.display = 'block';
        
        if (newOptions.childElementCount == 0) {
            let newSelection = document.createElement('SELECT');
            newSelection.className = 'selectionToggle';

            let option1 = document.createElement('option');
            option1.value = '1';
            option1.text = 'I want to wake up at';
            
            let option2 = document.createElement('option');
            option2.value = '2';
            option2.text = 'I want to go to bed at';

        newSelection.add(option1);
        newSelection.add(option2);

        newOptions.appendChild(newSelection);
    }
    } else {
        newOptions.style.display = 'none';
    };
};

window.addEventListener('resize', () => {
    createNewOptions();
});

createNewOptions();