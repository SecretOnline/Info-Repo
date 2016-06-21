window.repo = window.repo || {};
window.repo.InfoPage = React.createClass({
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
    var self = this;

    if (this.props.routeParams.info) {
      console.log(this.props.routeParams.info);

      var spotlight = this.props.route.info.find(function(info) {
        return self.props.routeParams.info === repo.modTitle(info.title);
      });

      if (!spotlight) {
        spotlight = {
          title: 'Info Not Found',
          text: [
            'Unfortunately, we weren\'t able to find any information on what you were looking for',
            'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
          ],
          spoiler: true
        }
      }

      return (
        <div class="page info-page">
          <repo.InfoSpotlight data={spotlight} link="/info" />
          <h2>Information</h2>
          <repo.InfoCardList info={this.props.route.info} link="/info" />
        </div>
      );
    }

    return (
      <div class="page info-page">
        <h2>Information</h2>
        <repo.InfoCardList info={this.props.route.info} click={this.setSpotlight} />
      </div>
    );

  }
});
