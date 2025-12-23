
console.log('javascript is connected');


const output = document.querySelector('output');

const upCount = document.querySelector('#up-count');
const downCount = document.querySelector('#down-count');
const resetButton = document.querySelector('#reset');


upCount.addEventListener('click', function() {
    increase();
})

downCount.addEventListener('click', function() {
    decrement();
})

let count = 0;

function increase() {
    count++;

    output.value = count;
}



function decrement() {
    
    if (output.value > 0)
        count--;  
    
    output.value = count;
}



