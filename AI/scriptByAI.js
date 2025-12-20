const valueEl = document.getElementById('value');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
let count = 0;

function render() {
  valueEl.textContent = count;
  valueEl.style.color = count > 0 ? '#2f855a' : (count < 0 ? '#e53e3e' : '#2d3748');
}

decreaseBtn.addEventListener('click', () => { count--; render(); });
increaseBtn.addEventListener('click', () => { count++; render(); });
resetBtn.addEventListener('click', () => { count = 0; render(); });

render();
