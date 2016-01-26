
function bellmanFord(e, s, d) { 
  // e : edges
  // s : source
  // d : destination
  // v : vertices
  var v = calculateV(e);
  var vName = Object.keys(v);
  var arr = [];
  var createArr = function(i) {
    if(!arr[i]) arr[i] = [];
  }
  createArr(0);

  for(var i = 0; i < vName.length; i++) {
    arr[0][vName[i]] = Infinity;
  }
  arr[0][s] = 0;

  for(var i = 1; i < e.length; i++) {
    delete arr[i - 2];
    createArr(i);

    for(var j = 0; j < vName.length; j++) {
      var cv = vName[j];
      var curArr = [];

      for(var z = 0; z < v[cv].headTo.length; z++) {
        var curHead = v[cv].headTo[z];
        var val = arr[i - 1][curHead[0]] + curHead[1];
        curArr.push(val);
      }
      arr[i][cv] = Math.min(
        arr[i - 1][cv],
        Math.min.apply(this, curArr)
      );
    }
  }

  var nocycle = true;
  var penultimateIter = arr[arr.length - 2];
  var lastIter = arr[arr.length - 1];

  for(var i = 0; i < vName.length; i++) {
    var cv = vName[i];

    if(lastIter[cv] != penultimateIter[cv]) {
      nocycle = false;
      break;
    }
  }
  return nocycle ? penultimateIter[d] : undefined;
}

function calculateV(e) {
  var r = {};

  var createEntry = function(vertex) {
    if(!r[vertex]) r[vertex] = {headTo: [], tailTo: []};
  }

  for(var i = 0; i < e.length; i++) {
    var curE = e[i];

    createEntry(curE[0]);
    createEntry(curE[1]);

    r[curE[0]].tailTo.push([curE[1], curE[2]]);
    r[curE[1]].headTo.push([curE[0], curE[2]]);
  }
  return r;
}

//test
var e = [
  [1, 2, 2],
  [1, 3, 4],
  [2, 3, 1],
  [2, 4, 2],
  [3, 5, 4],
  [4, 5, 2]
];
var eNoCycle = [
  [1, 2, 2],
  [1, 3, 4],
  [2, 3, 1],
  [2, 4, 2],
  [3, 5, 4],
  [4, 5, 2],
  [5, 1, -7]
];
console.log(bellmanFord(e, 1, 5) == 6, bellmanFord(e, 1, 5));
console.log(bellmanFord(eNoCycle, 1, 5) == undefined, bellmanFord(eNoCycle, 1, 5));