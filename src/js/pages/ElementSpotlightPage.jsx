import ElementSpotlight from '../cards/ElementSpotlight.jsx';
import OriginsCard from '../cards/OriginsCard.jsx';
import helper from '../helper';
import origins from '../origins';

export default class ElementSpotlightPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      items: []
    };

    var element = props.route.elements
      .find((info) => {
        return props.routeParams.element === helper.modTitle(info.title);
      });

    if (!element) {
      return;
    }

    var elementName = element.title;

    origins.find({
      type: 'planet',
      tags: elementName
    }).then((res) => {
      this.state.planets = res;
    });

    origins.find({
      type: 'item',
      tags: elementName
    }).then((res) => {
      this.state.items = res;
    });
  }

  render() {
    var spotlight = this.props.route.elements.find((info) => {
      return this.props.routeParams.element === helper.modTitle(info.title);
    });
    var highlighted = [];

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

    if (this.props.location.hash) {
      highlighted = this.props.location.hash
        .substr(1)
        .split(',')
        .map((item) => {
          try {
            return Number.parseInt(item);
          } catch (e) {
            return null;
          }
        })
        .filter((item) => {
          return item !== null;
        });
    }

    return (
      <div class="page element-page">
        <ElementSpotlight data={spotlight} highlighted={highlighted} />
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
