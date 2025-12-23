
console.log('javascript is connected');

const upCount = document.querySelector('#up-count');

const output = document.querySelector('output');

upCount.addEventListener('click', function() {
    increase();
})


function increase() {
    let outputValue = output.value;
    
    outputValue++;
    
    output.value = outputValue;
}


