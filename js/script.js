let btn = document.querySelector('.btn-button');
let popup = document.querySelector('.popup-card');
let btnClose = document.querySelector('.btn-close');

btn.addEventListener('click', ()=>{
    btn.classList.add('active');
    popup.classList.add('active');
})
btnClose.addEventListener('click', ()=>{
    btn.classList.remove('active');
    popup.classList.remove('active');
})