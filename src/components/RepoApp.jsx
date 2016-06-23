import React from 'react';
import RepoHeader from '../components/RepoHeader.jsx';
import RepoNav from '../components/RepoNav.jsx';
import RepoFooter from '../components/RepoFooter.jsx';

export default class RepoApp extends React.Component {
  getDefaultProps() {
    return {
      info: [],
      categories: [],
      elements: [],
      links: []
    }
  }

  render() {
    return (
      <div className="repo">
        <RepoHeader />
        <RepoNav />
        <main>
          <div className="main">
            {this.props.children}
          </div>
        </main>
        <RepoFooter />
      </div>
    );
  }
}
