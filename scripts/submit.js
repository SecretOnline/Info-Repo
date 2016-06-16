(function() {
  'use strict';

  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location = 'signin';
    }
  });

}());
