//Variables

const buttons = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', openModal);
}

function openModal(){
    const texte = document.createElement('p');
    texte.innerText = 'modale';
    texte.classList.add('fenetre');

    modal.appendChild(texte);
    modal.classList.add('visible');

    texte.addEventListener('click', closeModal);
}

function closeModal(event){
    modal.removeChild(event.currentTarget);
    modal.classList.remove('visible');
}