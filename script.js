function goToMenu() {
  showSection('menu');
}

function loadPage(page) {
  document.getElementById('page-frame').src = page;
  showSection('content');
}

function goBack() {
  document.getElementById('page-frame').src = '';
  showSection('menu');
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.add('active');
  document.getElementById(id).classList.remove('hidden');
}
