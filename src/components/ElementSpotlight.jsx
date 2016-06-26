import ElementCard from '../components/ElementCard.jsx';
import helper from '../helper.jsx';

export default class ElementSpotlight extends React.Component {
  static get defaultProps() {
    return {
      data: {
        color: '',
        places: [],
        symbol: '...',
        title: 'Loading...',
        text: ['Please wait, this shouldn\'t take too long'],
        type: ''
      },
      highlighted: []
    };
  }

  render() {
    // Create the main
    var classes = [
      'spotlight',
      'element-card'
    ];

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>),
      (<h3 className="element-symbol" key="header-symbol">{this.props.data.symbol}</h3>)
    ];

    // Set card content stuff
    var bodyList = [];
    if (this.props.data.text && this.props.data.text.length) {
      var descNodes = this.props.data.text.map((desc, index) => {
        if (this.props.highlighted.length) {
          if (this.props.highlighted.indexOf(index + 1) > -1) {
            return (
              <p key={`${index}-highlight`} className="highlighted">{desc}</p>
            )
          }
        }
        return (
          <p key={index}>{desc}</p>
        )
      });
      bodyList.push((<div className="information" key="body-desc">{descNodes}</div>));
    }
    if (this.props.data.places && this.props.data.places.length) {
      var placeNodes = this.props.data.places.map((place) => {
        return (
          <li key={place}>{place}</li>
        )
      });
      bodyList.push((<h4 key="body-places-title">Places</h4>));
      bodyList.push((<ul className="places" key="body-places">{placeNodes}</ul>));
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <div className="header" onClick={this.doClickCallback}>
          {headerList}
        </div>
        <div className="card-content">
          {bodyList}
        </div>
      </div>
    );
  }
}
