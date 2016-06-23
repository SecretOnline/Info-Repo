import React from 'react';
import Link from 'react-router/lib/Link';

export class RepoHeader extends React.Component {
  toggleNav() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  }

  render() {
    return (
      <header>
        <h1 className="title"><Link to="/">NMS Information Repository</Link></h1>
        <div className="button-container">
          <button type="button" className="menu" onClick={this.toggleNav}>
            <img src="res/menu.svg" alt="Navigation" />
          </button>
        </div>
      </header>
    );
  }
}
