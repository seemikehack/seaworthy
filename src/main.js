function row() {
  var r = document.getElementById('rowed');
  r.textContent = parseInt(r.textContent, 10) + 1;
}

document.getElementById('row').addEventListener('click', function () {
  row();
});
