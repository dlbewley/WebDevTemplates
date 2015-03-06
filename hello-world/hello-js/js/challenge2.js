'use strict';

// http://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-files-in-anonymous-functions-li

(function() {

  var hello = document.getElementById('hello_msg');
  hello.innerHTML = 'hello world';

  var letters = document.getElementById('letters');

  var out = "Letters: ";
  var i = 0;
  for (i = 65; i < 91; i++) {
    out += String.fromCharCode(i);
  }
 
  letters.innerHTML = out;

})();

