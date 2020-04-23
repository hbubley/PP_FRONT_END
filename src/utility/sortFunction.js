export function sortFunction(a, b) {
    var regex = /^([a-z]*)(\d*)/i;
    var _a = a.match(regex);
    var _b = b.match(regex);
    if (_a[1] < _b[1]) return -1;
    if (_a[1] > _b[1]) return 1;
    var _n = parseInt(_a[2]) - parseInt(_b[2]);
    if (_n === 0) return sortFunction(a.substr(_a[0].length), b.substr(_b[0].length));
    return _n;
  }
