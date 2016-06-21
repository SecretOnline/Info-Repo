window.repo = window.repo || {};
window.repo.ElementPage = React.createClass({
  getInitialState: function() {
    return {
      spotlight: null
    };
  },
  getDefaultProps: function() {
    return {
      elements: []
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
        <div class="page element-page">
          <repo.ElementSpotlight data={this.state.spotlight} click={this.removeSpotlight} />
          <h2>Elements</h2>
          <repo.ElementCardList elements={this.props.route.elements} click={this.setSpotlight} />
        </div>
      );
    } else {
      return (
        <div class="page element-page">
          <h2>Elements</h2>
          <repo.ElementCardList elements={this.props.route.elements} click={this.setSpotlight} />
        </div>
      );
    }

  }
});
