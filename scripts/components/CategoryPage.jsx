window.repo = window.repo || {};
window.repo.CategoryPage = React.createClass({
  getInitialState: function() {
    return {
      spotlight: null
    };
  },
  getDefaultProps: function() {
    return {
      categories: [],
      info: []
    };
  },
  setSpotlight: function(data) {
    this.setState({spotlight: data});
  },
  removeSpotlight: function() {
    this.setState({spotlight: null});
  },
  render: function() {

    if (this.state.spotlight) {
      return (
        <div class="page category-page">
          <repo.InfoSpotlight data={this.state.spotlight} click={this.removeSpotlight} />
          <repo.CategoryInfoContainer categories={this.props.route.categories} info={this.props.route.info} click={this.setSpotlight} />
        </div>
      );
    } else {
      return (
        <div class="page category-page">
          <h2>Information</h2>
          <repo.CategoryInfoContainer categories={this.props.route.categories} info={this.props.route.info} click={this.setSpotlight} />
        </div>
      );
    }

  }
});
