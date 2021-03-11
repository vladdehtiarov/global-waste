// Mask
const coordinate = document.getElementById('input-coordinate');
const phone = document.getElementById('input-phone');

// Mask for coordinate input
const coordinateMask = {
    mask: '00.0000000, 00.0000000'
};

// Msak for phone input
const phoneMask = {
    mask: '+00000 000 00 00'
};

const maskCoordinate = IMask(coordinate, coordinateMask);
const maskPhone = IMask(phone, phoneMask);

// Modal window
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

    if(phone.value.length == 16) {
        id.innerText = phone.value;
        modalForm.classList.add('hide');
        modalInner.classList.remove('hide');
    } else {
        phone.style.border = '1px solid red';
        phone.addEventListener('input', () => {
            phone.style.border = '1px solid #3EC072';
        });
    }

    

    
});
