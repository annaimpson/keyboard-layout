var textarea = document.getElementsByTagName('textarea')[0];
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

function keyboardFunc(e){
  e.preventDefault();
  var x = e.keyCode;
  if (dvorak[x]) {
    textarea.append(dvorak[x]);
  }
}

textarea.onkeydown = keyboardFunc;
