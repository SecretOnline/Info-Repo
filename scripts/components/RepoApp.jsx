window.repo = window.repo || {};
window.repo.RepoApp = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      categories: [],
      elements: [],
      links: []
    }
  },
  render: function() {
    return (
      <div className="repo">
        <repo.RepoHeader />
        <repo.RepoNav />
        <main>
          <div className="main">
            {this.props.children}
          </div>
        </main>
        <repo.RepoFooter />
      </div>
    );
  }
});
