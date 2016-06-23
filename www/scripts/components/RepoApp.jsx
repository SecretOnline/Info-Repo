import React from 'react';
import RepoHeader from './components/RepoHeader';
import RepoNav from './components/RepoNav';
import RepoFooter from './components/RepoFooter';

export class RepoApp extends React.Component {
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
});
