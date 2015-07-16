if (!Object.prototype.values) {
  Object.prototype.values = function (object) {
    return Object.keys(object).map(function (key) {
      return object[key];
    });
  };
}
