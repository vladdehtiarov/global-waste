
// Reward list

const rewardList = document.querySelector('.reward-list');
const reward = document.querySelector('.reward');
const sendId = document.querySelector('.send-id');
const phoneId = document.getElementById('input-phone-id');
const sendModal = document.querySelector('.send-modal');



if (reward) {
    reward.addEventListener('click', () => {
        rewardList.classList.remove('hide');
    });
}


if (sendModal) {
    sendModal.addEventListener('click', () => {
        document.location.href = "another-coordinate.html";
    });
    
}


// Modal window
const phone = document.getElementById('input-phone');
const coordinate = document.getElementById('input-coordinate');
const owerlay = document.querySelector('.owerlay');
const modal = document.querySelector('.modal');
const modalPhone = document.querySelector('.modal-phone');
const modalClose = document.querySelector('.modal--close');
const modalInner = document.querySelector('.modal--inner');
const modalForm = document.querySelector('.form');
const sendForm = document.querySelectorAll('.send-form');
const coordinateBtn = document.getElementById('id-coordinates');
const idBtn = document.getElementById('id-btn');
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
    phoneId.value = '';
    coordinate.value = '';
}

function showModal(modalHtml) {
    modalHtml.classList.remove('hide');
    owerlay.classList.remove('hide');
    window.removeEventListener('popstate', d);
}

function hideModal() {
    owerlay.classList.add('hide');
    modal.classList.add('hide');
    modalPhone.classList.add('hide');
    phoneId.value = '';
    window.removeEventListener('popstate', d);
}

function stateActions() {
    window.addEventListener('popstate' , d);
}

if (coordinateBtn) {
    coordinateBtn.addEventListener('click', function(e) {
        setTimeout(stateActions, 1);
        showModal(modal);
    });
}

if (idBtn) {
    idBtn.addEventListener('click', function(e) {
        setTimeout(stateActions, 1);
        showModal(modalPhone);
    });
}

if (owerlay) {
    owerlay.addEventListener('click', function() {
        this.classList.add('hide');
        modal.classList.add('hide');
        modalPhone.classList.add('hide');
        removeData();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        hideModal();
        removeData();
    });
}

if (sendModal) {
    sendModal.addEventListener('click', () => {
        hideModal();
        removeData();
    });
}

if (phone) {
    phone.addEventListener('input', () => {
        phone.style.border = '1px solid #3EC072';
    });
}

if (phoneId) {
    phoneId.addEventListener('input', () => {
        phone.style.border = '1px solid #3EC072';
    });    
}

if (sendForm) {
    sendForm.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(phone.value) {
                id.innerText = phone.value;
                modalForm.classList.add('hide');
                modalInner.classList.remove('hide');   
            } else {
                phone.style.border = '1px solid red';
            }
    
            if(phoneId.value) {
                id.innerText = phoneId.value;
                modalPhone.classList.add('hide');
                modal.classList.remove('hide');
                modalForm.classList.add('hide');
                modalInner.classList.remove('hide');   
            } else {
                phone.style.border = '1px solid red';
            }
    
        });
    });
}




