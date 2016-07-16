import helper from '../helper';

export default class ElementCard extends React.Component {
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
      click: null
    };
  }

  render() {
    // Create the main
    var classes = [
      'card',
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


    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={`${this.props.link}/${encodeURIComponent(helper.modTitle(this.props.data.title))}`}>
          <div className="header">
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );
  }
}
