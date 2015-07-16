var seaworthy = (function (gameloop) {
  // defaults, will get overwritten by storage value if it exists
  // FIXME extract constants to configuration
  var state = {
    distance: 0,
    seaworth: 0,
    accSeaworth: 0,
    nextSeaworth: 3
  };

  function row() {
    state.accSeaworth++;
    $('#distance').text(++state.distance);
  }

  function seaworth() {
    if (state.accSeaworth >= state.nextSeaworth) {
      state.accSeaworth = 0;
      // FIXME extract constants to configuration
      // TODO extract pricing function
      state.nextSeaworth = 2 + Math.floor(Math.pow(1.05, ++state.seaworth));
      $('#seaworth').text(state.seaworth);
    }
  }

  function autosave() {
    // FIXME extract constants to configuration
    localStorage.setItem('seaworthy-data', JSON.stringify(state));
  }

  function load() {
    // FIXME extract constants to configuration
    state = JSON.parse(localStorage.getItem('seaworthy-data')) || state;
    $('#distance').text(state.distance);
    $('#seaworth').text(state.seaworth);
  }

  $('#row').click(function () {
    row();
    seaworth();
  });

  (function () {
    load();

    // FIXME extract constants to configuration
    gameloop.add(autosave, 60);

    gameloop.start();
  }());
}(gameloop));
