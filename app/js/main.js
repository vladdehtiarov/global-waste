
// Modal window
const phone = document.getElementById('input-phone');
const owerlay = document.querySelector('.owerlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal--close');
const sendModal = document.querySelector('.send-modal');
const modalInner = document.querySelector('.modal--inner');
const modalForm = document.querySelector('.form');
const sendForm = document.querySelector('.send-form');
const coordinateBtn = document.getElementById('id-coordinates');
const id = document.getElementById('id');

coordinateBtn.addEventListener('click', function() {
    modal.classList.remove('hide');
    owerlay.classList.remove('hide');
});

owerlay.addEventListener('click', function() {
    this.classList.add('hide');
    modal.classList.add('hide');
});

modalClose.addEventListener('click', () => {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
});

sendModal.addEventListener('click', () => {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
});

sendForm.addEventListener('click', (e) => {
    e.preventDefault();
    
    id.innerText = phone.value;
    modalForm.classList.add('hide');
    modalInner.classList.remove('hide');    
});
