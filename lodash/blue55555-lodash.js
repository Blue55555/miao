var blue55555 = function () {

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
        isNaN(arr[i])
      ) {
        arr.splice(i, 1);
        i--;
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

  function difference(arr, ...val) {
    for (let a = 1; a < arguments.length; a++) {
      for (let i = 0; i < arr.length; i++) {
        for (var j in arguments[a]) {
          if (arguments[a][j] == arr[i]) {
            arr.splice(i, 1);
            i--;
            break;
          }
        }
      }
    }
    return arr;
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

  function join(arr, separator = ",") {
    let p = arr[0] + "";
    for (let i = 1; i < arr.length; i++) {
      p = p + separator + arr[i];
    }
    return p;
  }

  function last(arr) {
    return arr[arr.length - 1];
  }

  function lastIndexOf(arr, val, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] == val) {
        return i;
      }
    }
    return -1;
  }

  function fill(arr, val, start = 0, end = arr.length) {
    for (let i = start; i < end; i++) {
      arr[i] = val;
    }
    return arr;
  }


  function findIndex(arr, predicate = identity, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }

  function reverse(arr) {
    let n
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      n = arr[i]
      arr[i] = arr[arr.length - i - 1]
      arr[arr.length - 1 - i] = n
    }
    return arr
  }

  function sortedIndex(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        return i
      }
      if (arr[i] < val) {
        return i + 1
      }
    }
  }

  function reduce(collection, iteratee = a => a, accumulator, start = 0) {
    if (accumulator == undefined) {
      accumulator = collection[0]
      start += 1
    }
    for (let i = start; i < collection.length; i++) {
      accumulator = iteratee(collection[i], accumulator)
    }
    return accumulator
  }

  function pull(array, values) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] != values) {
        res.push(array[i])
      }
    }
    array = res
    return array
  }

  function pullAllBy(array, values, iteratee = a => a) {

  }

  function find(collection, predicate = a => a, fromIndex = 0) {
    if (typeof (predicate) === 'function') {
      for (let i = fromIndex; i < collection.length; i++) {
        predicate(collection[i], i, collection)
      }
    } else if (typeof (predicate) === 'object') {
      for (let i = fromIndex; i < collection.length; i++) {
        for (let key in predicate) {
          if (collection[i][key] != predicate[key]) {
            return undefined
          }
        }
        return collection[i]
      }
    }
    else if (Object.prototype.toString.call(predicate) === "[object Array]") {
      for (let i = fromIndex; i < collection.length; i++) {
        for (let j = 0; j < predicate.length; j++) {
          if (!(predicate[j] in collection[i])) {
            return undefined
          }
        }
        return collection[i]
      }
    } else {
      for (let i = fromIndex; i < collection.length; i++) {

      }
      if (Object.prototype.toString.call(collection) === "[object Array]") {
        if (predicate in collection) {
          return predicate
        }
      } else {
        if (collection[predicate] == true) {
          return collection[predicate]
        }
      }
    }
  }
  return {
    chunk,
    compact,
    concat,
    difference,
    drop,
    dropRight,
    join,
    last,
    lastIndexOf,
    fill,
    reverse,
    sortedIndex,
    reduce,
    pull,
    find,
  };
}();
