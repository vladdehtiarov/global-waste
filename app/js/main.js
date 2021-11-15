
// Reward list

const rewardList = document.querySelector('.reward-list');
const reward = document.querySelector('.reward');
const phoneId = document.getElementById('input-phone-id');
const sendModal = document.querySelector('.send-modal');
const conditions = document.querySelector('.conditions');
const conditionsModal = document.querySelector('.conditions-modal');
const coditionsInput = document.querySelector('#coditions-input');
const coditionsBtn = document.querySelector('#coditions-btn');
const modalCl = document.querySelector('.modal--close');
const conditionsBtn = document.querySelector('#conditions-btn');
const rewardsBtn = document.querySelector('#rewards-btn');
const conditionsContent = document.querySelector('.conditions__content');
const rewardContent = document.querySelector('.reward__content');
const phoneIdInp = document.querySelector('#input-phone-id');
const sendId = document.querySelector('.send-id');
const conditionsId = document.querySelector('#conditions-id');
const headerID = document.querySelector('.header__id');



if (reward) {
    reward.addEventListener('click', () => {
        rewardList.classList.remove('hide');
    });
}


if (sendId) {
    sendId.addEventListener('click', (e) => {
        e.preventDefault();
        // document.location.href = "conditions.html";
        falseValue(phoneIdInp);

    });
    
}

function falseValue(elem) {
    elem.classList.add('false-value');
    elem.placeholder = 'Not correct entry';

    setTimeout(ret, 1500);

    function ret() {
        elem.classList.remove('false-value');
        elem.placeholder = '+_____ _ ______';  
    }
}

if (conditions) {
    coditionsBtn.addEventListener('click', (event) => {
        conditions.classList.add('hide');
        conditionsModal.classList.remove('hide');
        
    });

    modalCl.addEventListener('click', () => {
        conditions.classList.remove('hide');
        conditionsModal.classList.add('hide');
    });

    conditionsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        rewardContent.classList.add('hide');
        conditionsContent.classList.remove('hide');
        headerID.classList.remove('hide');
        conditionsBtn.classList.add('conditions-btn_active');
        rewardsBtn.classList.remove('conditions-btn_active');
        console.log(1)
    });

    rewardsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        rewardContent.classList.remove('hide');
        conditionsContent.classList.add('hide');
        headerID.classList.add('hide');
        conditionsBtn.classList.remove('conditions-btn_active');
        rewardsBtn.classList.add('conditions-btn_active');
        console.log(2)
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




