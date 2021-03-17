
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

function removeData() {
    modalForm.classList.remove('hide');
    modalInner.classList.add('hide'); 
    phone.value = '';
}
 
coordinateBtn.addEventListener('click', function() {
    modal.classList.remove('hide');
    owerlay.classList.remove('hide');
});

owerlay.addEventListener('click', function() {
    this.classList.add('hide');
    modal.classList.add('hide');
    removeData();
});

modalClose.addEventListener('click', () => {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
    removeData(); 
});

sendModal.addEventListener('click', () => {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
    removeData();
});

phone.addEventListener('input', () => {
    phone.style.border = '1px solid #3EC072';
});

sendForm.addEventListener('click', (e) => {
    e.preventDefault();
    if(phone.value) {
        id.innerText = phone.value;
        modalForm.classList.add('hide');
        modalInner.classList.remove('hide');   
    } else {
        phone.style.border = '1px solid red';
    }
});
