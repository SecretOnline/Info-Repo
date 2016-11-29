function httpGet(url) {
  return _request('get', url);
}

function httpPost(url, data) {
  return _request('post', url, data);
}

function _request(method, url, data, headers) {
  return new Promise(function(resolve, reject) {
    if (method.toLowerCase() === 'get') {
      if (data) {
        if (typeof data === 'object') {
          url = `${url}?`;
          for (var key in data) {
            url += `${key}=${data[key]}`;
          }
        } else {
          url = `${url}?${data}`;
        }
      }
    } else if (method.toLowerCase() === 'post') {
      if (typeof data === 'object') {
        data = JSON.stringify(data);
      }
    }

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      resolve(xhr.responseText);
    });
    xhr.addEventListener('error', function(e) {
      reject(e);
    });

    xhr.open(method, url, true);

    if (headers) {
      for (var k in headers) {
        xhr.setRequestHeader(k, headers[k]);
      }
    }

    if (method.toLowerCase() === 'post') {
      xhr.send(data);
    } else {
      xhr.send();
    }
  });
}

function truncateString(string, maxLength = 10) {
  string = string.replace(/^https?:\/\/(?:www\.)?/i, '');

  if (string.length < maxLength)
    return string;
  else
    return `${string.substr(0, maxLength - 3)}...`;
}

function modTitle(title) {
  return title.replace(/\s/g, '_');
}

function scrollToTop() {
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
}

function changeCanonical(path) {
  var link = document.querySelector('link[rel=canonical]');
  if (link) {
    link.href = `${window.location.protocol}//${window.location.host}${path}`;
  } else {
    // eslint-disable-next-line no-console
    console.error('unable to change canonical link, element doesn\'t exist');
  }
}

function titleSort(a, b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

export default {
  httpGet,
  httpPost,
  _request,
  truncateString,
  modTitle,
  scrollToTop,
  changeCanonical,
  titleSort
};
