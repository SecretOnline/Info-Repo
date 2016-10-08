import {
  RepoHeader,
  RepoNav,
  RepoFooter,
  RepoOld
} from '../components';

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
        <RepoOld />
      </div>
    );
  }
}
