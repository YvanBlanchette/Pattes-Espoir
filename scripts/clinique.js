const newQueryYes = document.getElementById('newQuery-yes');
const newQueryNo = document.getElementById('newQuery-no');
const queryMessage = document.getElementById('queryMessage');
const queryForm = document.getElementById('queryForm');

newQueryYes.addEventListener('click', () => {
  queryMessage.classList.remove('hidden');
  queryForm.classList.add('hidden');
});

newQueryNo.addEventListener('click', () => {
  queryMessage.classList.add('hidden');
  queryForm.classList.remove('hidden');
});