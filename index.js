
console.log('javascript is connected');

const upCount = document.querySelector('#up-count');
const downCount = document.querySelector('#down-count');

const output = document.querySelector('output');

upCount.addEventListener('click', function() {
    increase();
})

downCount.addEventListener('click', function() {
    decrement();
})

function increase() {
    let outputValue = output.value;
    
    outputValue++;
    
    output.value = outputValue;
}



function decrement() {
    let outputValue = output.value;
    
    outputValue--;
    
    output.value = outputValue;
}

// const resetButton = document.querySelector('#reset');

// function reset() {
//     output.value = 0;
// }


// resetButton.addEventListener('click', function() {
//     reset();
// })

