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
            <repo.InfoPage info={this.props.info} />
            <repo.ElementPage elements={this.props.elements} />
            <repo.CategoryPage categories={this.props.categories} info={this.props.info} />
            <repo.LinkPage links={this.props.links} />
          </div>
        </main>
        <repo.RepoFooter />
      </div>
    );
  }
});
