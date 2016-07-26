import {
  ElementSpotlight,
  OriginsCard
} from '../components';
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

    var elementName
    if (element) {
      elementName = element.title.toLowerCase();
    } else {
      // return;
      elementName = props.routeParams.element.toLowerCase();
    }

    origins.find({
      $or: [
        {name: {$regex: `.*${elementName}.*`,$options: 'i'}, type: 'planet'},
        {tags: elementName, type: 'planet'}
      ]
    }).then((res) => {
      this.setState({
        planets: res,
        items: this.state.items
      });
    });

    origins.find({
      $or: [
        {name: {$regex: `.*${elementName}.*`,$options: 'i'}, type: 'item'},
        {tags: elementName, type: 'item'}
      ]
    }).then((res) => {
      this.setState({
        planets: this.state.planets,
        items: res
      });
    });
  }

  render() {
    var spotlight = this.props.route.elements.find((info) => {
      return this.props.routeParams.element === helper.modTitle(info.title);
    });
    var highlighted = [];

    if (!spotlight) {
      spotlight = {
        title: 'Element Not Found',
        symbol: '??',
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

    var originsList = [];
    if (this.state.planets.length || this.state.items.length) {
      originsList.push(<h2 key="o-title">NMS Origins</h2>)
    }
    if (this.state.planets.length) {
      originsList.push(<h3 key="o-planets-title">Planets tagged {spotlight.title}</h3>);

      var planetCards = this.state.planets.map((data) => {
        return <OriginsCard data={data} key={data._id} />
      });
      originsList.push(<div className="card-list" key="o-planets">{planetCards}</div>);
    }
    if (this.state.items.length) {
      originsList.push(<h3 key="o-items-title">Items tagged {spotlight.title}</h3>);

      var itemCards = this.state.items.map((data) => {
        return <OriginsCard data={data} key={data._id} />
      });
      originsList.push(<div className="card-list" key="o-items">{itemCards}</div>);
    }

    return (
      <div class="page element-page">
        <ElementSpotlight data={spotlight} highlighted={highlighted} />
        {originsList}
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
