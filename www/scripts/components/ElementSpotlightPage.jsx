window.repo = window.repo || {};
window.repo.ElementSpotlightPage = React.createClass({
  render: function() {
    var self = this;

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
        <h2>Other</h2>
          <div className="card">
            <ReactRouter.Link to="/elements">
              <div className="header">
                <h3 className="card-title">Back to All Elements</h3>
              </div>
            </ReactRouter.Link>
          </div>
      </div>
    );
  }
});
