import React from 'react';
import Link from 'react-router/lib/Link';

export class RepoNav extends React.Component {
  closeNav() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.remove('open');
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="tab-info" onClick={this.closeNav}><Link to="/info">Information</Link></li>
          <li className="tab-info" onClick={this.closeNav}><Link to="/categories">Categories</Link></li>
          <li className="tab-info" onClick={this.closeNav}><Link to="/elements">Elements</Link></li>
          <li className="tab-info" onClick={this.closeNav}><Link to="/links">Links</Link></li>
        </ul>
      </nav>
    );
  }
});
