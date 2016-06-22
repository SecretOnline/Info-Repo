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
    var self = this;

    if (this.props.routeParams.category) {

      var category = this.props.route.categories.find(function(cat) {
        return self.props.routeParams.category === repo.modTitle(cat.title);
      });

      if (this.props.routeParams.info) {

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
          <div class="page element-page">
            <repo.InfoSpotlight data={spotlight} link="/info" />
            <repo.CategoryInfoContainer categories={this.props.route.categories} info={this.props.route.info} link="/categories" cat={category} />
          </div>
        );
      }

      if (category) {
        return (
          <div class="page category-page">
            <repo.CategoryInfoContainer categories={this.props.route.categories} info={this.props.route.info} link="/categories" cat={category} />
          </div>
        );
      }
    }

    return (
      <div class="page category-page">
        <repo.CategoryInfoContainer categories={this.props.route.categories} info={this.props.route.info} link="/categories" />
      </div>
    );
  }
});
