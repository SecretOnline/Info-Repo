(function() {
  'use strict';

  function initSubmit() {
    var titleEl = document.querySelector('input[name=title]');
    document.querySelector('select[name=category]').addEventListener('change', function() {
      if (this.value === 'info' || this.value === 'resources') {
        titleEl.removeAttribute('disabled');
      } else {
        titleEl.setAttribute('disabled', 1);
      }
    });
    document.querySelector('button[name=submit]').addEventListener('click', function(event) {
      firebase.database().ref('pending').push({
        user: firebase.auth().currentUser.uid,
        category: document.querySelector('select[name=category]').value,
        title: document.querySelector('input[name=title]').value,
        text: document.querySelector('textarea[name=info]').value
      });

      this.setAttribute('disabled', 1);
      this.textContent = 'Submitted!';

      event.preventDefault();
      return false;
    });
  }



  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location = 'signin';
    }
  });

  window.addEventListener('DOMContentLoaded', initSubmit);

}());
