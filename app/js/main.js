
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

const d = function() {
    hideModal();
    window.removeEventListener('popstate', d);
    console.log(1);
};

function removeData() {
    modalForm.classList.remove('hide');
    modalInner.classList.add('hide'); 
    phone.value = '';
}

function showModal() {
    modal.classList.remove('hide');
    owerlay.classList.remove('hide');
    window.removeEventListener('popstate', d);
}

function hideModal() {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
    window.removeEventListener('popstate', d);
}

function stateActions() {
    window.addEventListener('popstate' , d);
}

coordinateBtn.addEventListener('click', function(e) {
    setTimeout(stateActions, 1);
    showModal();
});

owerlay.addEventListener('click', function() {
    this.classList.add('hide');
    modal.classList.add('hide');
    removeData();
});

modalClose.addEventListener('click', () => {
    hideModal();
    removeData(); 
});

sendModal.addEventListener('click', () => {
    hideModal();
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

