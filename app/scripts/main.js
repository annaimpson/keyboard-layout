function myFunction(e){
  e.preventDefault();
  var x = e.keyCode;
  console.log(x);
  var keychar = String.fromCharCode(x);
  var textarea = document.getElementsByTagName("textarea")[0];
  var res = keychar.substring(1);

  if( e.keyCode == 81 ){
    textarea.append('"');
  }
  if( e.keyCode == 87 ){
    textarea.append('<');
  }
  if( e.keyCode == 69 ){
    textarea.append('>');
  }
  if( e.keyCode == 82 ){
    textarea.append('p');
  }
  if( e.keyCode == 84 ){
    textarea.append('y');
  }
  if( e.keyCode == 89 ){
    textarea.append('f');
  }
  if( e.keyCode == 85 ){
    textarea.append('g');
  }
  if( e.keyCode == 73 ){
    textarea.append('c');
  }
  if( e.keyCode == 79 ){
    textarea.append('r');
  }
  if( e.keyCode == 80 ){
    textarea.append('l');
  }
  if( e.keyCode == 65 ){
    textarea.append('a');
  }
  if( e.keyCode == 83 ){
    textarea.append('o');
  }
  if( e.keyCode == 68 ){
    textarea.append('e');
  }
  if( e.keyCode == 70 ){
    textarea.append('u');
  }
  if( e.keyCode == 71 ){
    textarea.append('i');
  }
  if( e.keyCode == 72 ){
    textarea.append('d');
  }
  if( e.keyCode == 74 ){
    textarea.append('h');
  }
  if( e.keyCode == 75 ){
    textarea.append('t');
  }
  if( e.keyCode == 76 ){
    textarea.append('n');
  }
  if( e.keyCode == 186 ){
    textarea.append('s');
  }
  if( e.keyCode == 90 ){
    textarea.append(':');
  }
  if( e.keyCode == 88 ){
    textarea.append('q');
  }
  if( e.keyCode == 67 ){
    textarea.append('j');
  }
  if( e.keyCode == 86 ){
    textarea.append('k');
  }
  if( e.keyCode == 66 ){
    textarea.append('x');
  }
  if( e.keyCode == 78 ){
    textarea.append('b');
  }
  if( e.keyCode == 77 ){
    textarea.append('m');
  }
  if( e.keyCode == 188 ){
    textarea.append('w');
  }
  if( e.keyCode == 190 ){
    textarea.append('v');
  }
  if( e.keyCode == 191 ){
    textarea.append('z');
  }
  if( e.keyCode == 9 ){
    textarea.append('   ');
  }
  if( e.keyCode == 32 ){
    textarea.append(' ');
  }
  if( e.keyCode == 8 ){
    document.getElementById("myId").innerHTML = res;
  }
}

var myEl = document.getElementById('myId');
myEl.onkeydown = myFunction;
