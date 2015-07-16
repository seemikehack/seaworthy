var seaworthy = (function () {
  var state = {};

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

  var gameloop = (function () {
    var timer;
    var id = -1;
    var toRun = {};

    function run() {
      Object.values(toRun).forEach(function (f) {
        f();
      });
    }
    function start() {
      timer = window.setInterval(run, 1000);
    }
    function stop() {
      window.clearInterval(timer);
    }
    function add(f) {
      toRun[++id] = f;
      return id;
    }
    function remove(_id) {
      delete toRun[_id];
    }

    return {
      start  : start,
      stop   : stop,
      add    : add,
      remove : remove
    };
  }());

  $('#row').click(function () {
    row();
    seaworth();
  });

  (function () {
    state.distance = 0;
    state.seaworth = 0;
    state.accSeaworth = 0;
    state.nextSeaworth = 3;

    gameloop.start();
  }());
}());
