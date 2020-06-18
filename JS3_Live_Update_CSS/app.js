const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input=> input.addEventListener('change',handleUpdate));//for click to change input
inputs.forEach(input=> input.addEventListener('mousemove',handleUpdate));//for move mouse to change input
