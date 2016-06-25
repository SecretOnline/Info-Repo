(function() {
  'use strict';

  var url = window.location.toString();
  var regex = /.*\?(\w+)(?:=([\w%]+))?/;

  var res = url.match(regex);
  if (res) {
    console.log('old url detected, need to redirect');

    var page = res[1];
    var item = res[2];

    // And awaaayy we go!
    if (item) {
      window.location = page + '/' + item;
    } else {
      window.location = page;
    }
  }
}());
