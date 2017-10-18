function keyboardFunc(e){
  e.preventDefault();
  var x = e.keyCode;
  var textarea = document.getElementsByTagName("textarea")[0];
  // var iso = {
  //    81: 'q',
  //    87: 'w',
  //    69: 'e',
  //    82: 'r',
  //    84: 't',
  //    89: 'y',
  //    85: 'u',
  //    73: 'i',
  //    79: 'o',
  //    80: 'p',
  //    65: 'a',
  //    83: 's',
  //    68: 'd',
  //    70: 'f',
  //    71: 'g',
  //    72: 'h',
  //    74: 'j',
  //    75: 'k',
  //    76: 'l',
  //    90: 'z',
  //    88: 'x',
  //    67: 'c',
  //    86: 'v',
  //    66: 'b',
  //    78: 'n',
  //    77: 'm'
  // };
  var dvorak = {
    82: 'p',
    84: 'y',
    89: 'f',
    85: 'g',
    73: 'c',
    79: 'r',
    80: 'l',
    65: 'a',
    83: 'o',
    68: 'e',
    70: 'u',
    71: 'i',
    72: 'd',
    74: 'h',
    75: 't',
    76: 'n',
    186: 's',
    88: 'q',
    67: 'j',
    86: 'k',
    66: 'x',
    78: 'b',
    77: 'm',
    188: 'w',
    190: 'v',
    191: 'z',
  };
  var map = new Map(Object.entries(dvorak));
  var dvorakObject = Object.entries(dvorak);
  // var isoObject = Object.entries(iso);
  console.log(dvorakObject);

    function keyboardLayout() {
      for (var i = 1; i < dvorakObject.length; i++) {
        if( e.keyCode == dvorakObject[i][0]) {
          console.log(dvorakObject[i][0]);
          textarea.append(dvorakObject[i][1]);
          console.log(dvorakObject[i][1]);
        }
      }
  }
  keyboardLayout();
}

var myEl = document.getElementById('textarea');
myEl.onkeydown = keyboardFunc;
