var state = {};

function row() {
  state.accSeaworth++;
  document.getElementById('distance').textContent = ++state.distance;
}

function seaworth() {
  if (state.accSeaworth >= state.nextSeaworth) {
    state.accSeaworth = 0;
    // FIXME extract constants to configuration
    // TODO extract pricing function
    state.nextSeaworth = 2 + Math.floor(Math.pow(1.05, ++state.seaworth));
    document.getElementById('seaworth').textContent = state.seaworth;
  }
}

document.getElementById('row').addEventListener('click', function () {
  row();
  seaworth();
});

(function () {
  state.distance = 0;
  state.seaworth = 0;
  state.accSeaworth = 0;
  state.nextSeaworth = 3;
}());
