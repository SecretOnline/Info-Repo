(function() {
  'use strict';

  function addListeners() {

    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var main = document.querySelector('main');
    var menu = document.querySelector('.menu');

    // do navbar scoll stuff
    window.addEventListener("optimizedScroll", function() {
      // If the header is out of view
      if (scrollY > 70) {
        header.classList.add('floating');
      } else {
        header.classList.remove('floating');
      }
      if (scrollX > 0)
        window.scroll(0, scrollY);
    });

    function closeNav() {
      nav.classList.remove('open');
    }

    function toggleNav() {
      nav.classList.toggle('open');
    }

    menu.addEventListener('click', toggleNav);
    main.addEventListener('click', closeNav);
  }

  // Thanks to https://developer.mozilla.org/en-US/docs/Web/Events/scroll
  // For the following scroll event throtling.
  // Yay for making things go slightly slower for performance!
  (function() {
    var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };
    throttle("scroll", "optimizedScroll");
  })();

  if (document.readyState !== 'loading')
    addListeners();
  else
    window.addEventListener('DOMContentLoaded', addListeners);
}());
