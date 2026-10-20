let result = document.getElementById('result');
let btn = document.querySelector('[type="submit"]');
result.style
window.addEventListener('mousemove', (event)=>{
    result.textContent = 'По оси х: ' +event.clientX+' / По оси У: '+event.clientY;
    btn.value = 'По оси х: ' +event.clientX+' / По оси У: '+event.clientY;
});
result.addEventListener('mouseenter', (event)=> {
    result.textContent = 'Курсор пришел на элемент';
});
result.addEventListener('mouseleave', (event)=> {
    result.textContent = 'Курсор покинул на элемент';
});

const button = document.getElementById('colorist');

button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

