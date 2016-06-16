window.repo = window.repo || {};
window.repo.CategoryInfoContainer = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      categories: []
    };
  },
  render: function() {
    return (
      <div>
        <h2>Categories</h2>
        <repo.CategoryCardList categories={this.props.categories} />
        <h2>Information</h2>
        <repo.InfoCardList categories={this.props.categories} info={this.props.info} />
      </div>
    );
  }
});
