'use strict';

// http://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-files-in-anonymous-functions-li

(function() {

  var hello = document.getElementById('hello_msg');
  var str = 'hello world';
  hello.innerHTML = str.toUpperCase();

})();

