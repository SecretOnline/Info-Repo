import RepoHeader from './layout/RepoHeader.jsx';
import RepoNav from './layout/RepoNav.jsx';
import RepoFooter from './layout/RepoFooter.jsx';

export default class RepoApp extends React.Component {
  static get defaultProps() {
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
