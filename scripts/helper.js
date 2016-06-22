window.repo = window.repo || {};

window.repo.get = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      resolve(xhr.responseText);
    });
    xhr.addEventListener('error', function(e) {
      reject(e);
    });
    xhr.open('get', url, true);
    xhr.send();
  });
};

window.repo.truncateString = function(string, maxLength) {
  string = string.replace(/^https?:\/\/(?:www\.)?/i, '');

  if (string.length < maxLength)
    return string;
  else
    return string.substr(0, maxLength - 3) + '...';
};

window.repo.modTitle = function(title) {
  return title.replace(/\s/g, "_");
};

window.repo.scrollToTop = function() {
  var increment = -80;

  function nextScroll() {
    var diff = 0 - window.scrollY;

    var newY = window.scrollY + Math.max(diff, increment);

    window.scroll(0, newY);

    if (window.scrollY === 0) {
      return;
    }

    requestAnimationFrame(nextScroll);
  }

  nextScroll();
};
