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
    var self = this;

    if (this.props.routeParams.element) {

      var spotlight = this.props.route.elements.find(function(info) {
        return self.props.routeParams.element === repo.modTitle(info.title);
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
        <div class="page element-page">
          <repo.ElementSpotlight data={spotlight} link="/elements" />
          <h2>Elements</h2>
          <repo.ElementCardList elements={this.props.route.elements} link="/elements" />
        </div>
      );
    }

    return (
      <div class="page element-page">
        <h2>Elements</h2>
        <repo.ElementCardList elements={this.props.route.elements} link="/elements" />
      </div>
    );
  }
});
