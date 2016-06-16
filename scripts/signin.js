(function() {
  'use strict';

  function initSignin() {
    document.querySelector('.login-go').addEventListener('click', function() {
      signWithProvider(new firebase.auth.GoogleAuthProvider());
    });
    document.querySelector('.login-fb').addEventListener('click', function() {
      signWithProvider(new firebase.auth.FacebookAuthProvider());
    });
    document.querySelector('.login-tw').addEventListener('click', function() {
      signWithProvider(new firebase.auth.TwitterAuthProvider());
    });
    document.querySelector('.login-gh').addEventListener('click', function() {
      signWithProvider(new firebase.auth.GithubAuthProvider());
    });
  }

  function signWithProvider(provider) {
    return firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Successfully authed, go back to previous page
        window.history.back();
      }).catch(function(error) {
        console.error(error.message);

        var main = document.querySelector('.main');

        if (main.querySelector('.error')) {
          // Error already on page
          return;
        }

        var container = document.createElement('div');
        var heading = document.createElement('h2');
        var text = document.createElement('p');
        var reason = document.createElement('p');

        container.classList.add('error');

        heading.textContent = 'Uh oh, something went wrong';
        text.textContent = 'An error occured while trying to sign in. Either try again, or try another sign in method.';
        reason.textContent = 'Message: ' + error.message;

        container.appendChild(heading);
        container.appendChild(text);
        container.appendChild(reason);
        main.appendChild(container);
      });
  }

  window.addEventListener('DOMContentLoaded', initSignin);
}());
