import helper from '../helper';

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

  highlightChanger(event) {
    var index = event.target.dataset.index;

    var curr = window.location.hash
      .substr(1)
      .split(',');

    if (curr[0] === '') {
      curr = [];
    }

    if (curr.indexOf(index) > -1) {
      curr = curr.filter((item) => {
        return item !== index;
      });
    } else {
      curr.push(index);
    }

    if (curr.length) {
      curr.sort();
      ReactRouter.browserHistory.push(`${window.location.pathname}#${curr.join(',')}`);
    } else {
      ReactRouter.browserHistory.push(window.location.pathname);
    }
  }

  render() {
    // Create the main
    var classes = [
      'spotlight',
      'element-card'
    ];

    var headerStyle = {};
    if (this.props.data.color) {
      headerStyle.backgroundColor = this.props.data.color;
    }

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>),
      (<h3 className="element-symbol" key="header-symbol">{this.props.data.symbol}</h3>)
    ];

    // Set card content stuff
    var bodyList = [];
    if (this.props.data.text && this.props.data.text.length) {
      var descNodes = this.props.data.text.map((desc, index) => {
        var oneIndex = index + 1;
        if (this.props.highlighted.length) {
          if (this.props.highlighted.indexOf(oneIndex) > -1) {
            return (
              <p key={`${oneIndex}-highlight`} className="highlighted" data-index={oneIndex} onClick={this.highlightChanger}>{desc}</p>
            )
          }
        }
        return (
          <p key={oneIndex} data-index={oneIndex} onClick={this.highlightChanger}>{desc}</p>
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
        <div className="header" style={headerStyle}>
          {headerList}
        </div>
        <div className="card-content">
          {bodyList}
        </div>
      </div>
    );
  }
}
