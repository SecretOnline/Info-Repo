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
            <repo.InfoPage info={this.props.route.info} />
            <repo.ElementPage elements={this.props.route.elements} />
            <repo.CategoryPage categories={this.props.route.categories} info={this.props.route.info} />
            <repo.LinkPage links={this.props.route.links} />
          </div>
        </main>
        <repo.RepoFooter />
      </div>
    );
  }
});
