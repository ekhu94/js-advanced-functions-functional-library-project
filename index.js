const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, cb) {
      const newCol = Array.isArray(col) ? col.slice() : Object.values(col);
      newCol.forEach(n => cb(n));
      return col;
    },

    map: function(col, cb) {
      const newCol = Array.isArray(col) ? [...col] : Object.values(col);
      return newCol.map(n => cb(n));
    },

    reduce: function(col, cb, acc) {
      if (!acc) {
        acc = col[0];
        col = col.slice(1);
      }
      return col.reduce((s, v) => cb(s, v, col), acc);
    },

    find: function(col, p) {
      return col.find(n => p(n));
    },

    filter: function(col, p) {
      return col.filter(n => p(n));
    },

    size: function(col) {
      return Array.isArray(col) ? col.length : Object.values(col).length;
    },

    first: function(arr, n) {
      return n ? arr.slice(0, n) : arr[0];
    },

    last: function(arr, n) {
      return n ? arr.slice(arr.length - n) : arr.slice(-1)[0];
    },

    compact: function(arr) {
      return arr.filter(n => !!n)
    },

    sortBy: function(arr, cb) {
      return arr.slice().sort((a, b) => cb(a) - cb(b));
    },

    flatten: function(arr, shal) {

    },

    uniq: function(arr, sorted=false, it=false) {
      
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      return Object.getOwnPropertyNames(obj).filter(k => {
        return typeof obj[k] === "function";
      })
    },


  }
})()

fi.libraryMethod()
