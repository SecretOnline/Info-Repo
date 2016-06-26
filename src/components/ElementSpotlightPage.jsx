import ElementSpotlight from '../components/ElementSpotlight.jsx';
import helper from '../helper.jsx';

export default class ElementSpotlightPage extends React.Component {
  render() {
    var spotlight = this.props.route.elements.find((info) => {
      return this.props.routeParams.element === helper.modTitle(info.title);
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
        <ElementSpotlight data={spotlight} link="/elements" />
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
}
