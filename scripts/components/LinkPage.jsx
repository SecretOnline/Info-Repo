window.repo = window.repo || {};
window.repo.LinkPage = React.createClass({
  getInitialState: function() {
    return {
      spotlight: null
    };
  },
  getDefaultProps: function() {
    return {
      links: []
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
        <div class="page links-page">
          <h2>Links</h2>
          <repo.LinkGroupList links={this.props.links} click={this.setSpotlight} />
        </div>
      );
    } else {
      return (
        <div class="page links-page">
          <h2>Links</h2>
          <repo.LinkGroupList links={this.props.links} click={this.setSpotlight} />
        </div>
      );
    }

  }
});
