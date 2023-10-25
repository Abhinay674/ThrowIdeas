import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css'

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');

function open() {
  modal.computedStyleMap.display = 'block';
}

modalBtn.addEventListener('click', open);