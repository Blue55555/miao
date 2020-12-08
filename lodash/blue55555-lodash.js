var blue55555 = (function () {
  function chunk(arr, size) {
    let result = [];
    let num = 0;
    var n = 0;
    var l = 0;
    for (let i = 0; i < arr.length; i = i + size) {
      result.push([]);
      for (var j = 0; j < size; j++) {
        if (l == arr.length) {
          return result;
        }
        result[n].push(arr[l]);
        l++;
      }
      n++;
    }
    return result;
  }

  function compact(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] === 0 ||
        arr[i] === false ||
        arr[i] === null ||
        arr[i] === "" ||
        arr[i] === undefined ||
        arr[i] === NaN
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  function concat(arr, ...val) {
    for (let i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        for (var j in arguments[i]) {
          arr.push(arguments[i][j]);
        }
      } else {
        arr.push(arguments[i]);
      }
    }
    return arr;
  }

  function difference(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      for (var j in val) {
        if (val[j] == arr[i]) {
          arr.splice(i, 1);
          break;
        }
      }
    }
    return arr;
  }

  function differenceBy(array, [values], [iteratee = _.identity]) {
    s;
  }

  function differenceWith(arr, val, com) {
    s;
  }

  function drop(arr, n = 1) {
    arr.splice(0, n);
    return arr;
  }

  function dropRight(arr, n = 1) {
    for (let i = 0; i < n; i++) {
      arr.pop();
    }
    return arr;
  }

  function dropRightWhile() {
    s;
  }

  return {
    chunk,
    compact,
    concat,
    difference,
  };
}();
