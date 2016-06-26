(function() {
  'use strict';

  var page;
  var item;
  var highlighted;
  var searchParams = {};

  try {
    // Thanks to https://developer.mozilla.org/en-US/docs/Web/API/URLUtils/search for the following block of code
    if (window.location.search.length > 1) {
      for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
        aItKey = aCouples[nKeyId].split("=");
        searchParams[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]).replace(/_/g, " ") : "";
      }
    }
  } catch (err) {
    console.error('Error trying to process search parameters');
    console.error(location.search);
    return;
  }

  if (typeof searchParams.cat !== 'undefined') {
    page = 'categories';
    if (searchParams.cat !== '') {
      item = searchParams.cat;
    }
  } else if (typeof searchParams.search !== 'undefined') {
    page = 'search';
    if (searchParams.search) {
      item = searchParams.search;
    }
  } else if (typeof searchParams.info !== 'undefined') {
    page = 'info';
    if (searchParams.info) {
      item = searchParams.info;

      if (searchParams.highlight) {
        highlighted = searchParams.highlight;
      }
    }
  } else if (typeof searchParams.element !== 'undefined') {
    page = 'elements';
    if (searchParams.element) {
      item = searchParams.element;
    }
  } else if (typeof searchParams.recent !== 'undefined') {
    page = '/';
  } else if (typeof searchParams.links !== 'undefined') {
    page = 'links';
  }


  // And awaaayy we go!
  if (page) {
    if (item) {
      if (highlighted) {
        window.location = '/' + page + '/' + item + '#' + highlighted;
      } else {
        window.location = '/' + page + '/' + item;
      }
    } else {
      window.location = '/' + page;
    }
  }
}());
