window.repo = window.repo || {};
window.repo.InfoPage = React.createClass({
  getInitialState: function() {
    return {
      spotlight: null
    };
  },
  getDefaultProps: function() {
    return {
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
        <div class="page info-page">
          <repo.InfoSpotlight data={this.state.spotlight} click={this.removeSpotlight} />
          <h2>Information</h2>
          <repo.InfoCardList info={this.props.route.info} click={this.setSpotlight} />
        </div>
      );
    } else {
      return (
        <div class="page info-page">
          <h2>Information</h2>
          <repo.InfoCardList info={this.props.route.info} click={this.setSpotlight} />
        </div>
      );
    }

  }
});
