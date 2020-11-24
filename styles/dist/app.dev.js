"use strict";

var checkArray = function checkArray() {
  if (charArray1[0] == charArray2[0] && charArray1[1] == charArray2[1] && charArray1[2] == charArray2[2] && charArray1[3] == charArray2[3]) {
    return true;
  } else {
    return false;
  }
};

function Check(s1, s2) {
  if (typeof s1 == "string" && typeof s2 == 'string') {
    var _charArray = [];
    s1.split("");
    s1.map(function (_char) {
      var c = _char;

      _charArray.push(c);
    });
    var _charArray2 = [];
    s2.map(function (_char2) {
      var c = _char2;

      _charArray2.push(c);
    });

    _charArray.sort();

    _charArray2.sort();

    checkArray();
  } else {
    console.log("Invalid Input");
  }
}

console.log(Check('bobo', 'obob'), 'true');
console.log(Check('bobo', 'boo4b'), 'false');
console.log(Check('dog', 'god'), 'true'); // This test case fails

console.log(Check('gabety', 'gabmen'), 'false');