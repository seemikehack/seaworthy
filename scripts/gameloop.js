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
