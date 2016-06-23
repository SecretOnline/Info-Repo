window.repo = window.repo || {};
window.repo.ElementCard = React.createClass({
  getDefaultProps: function() {
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
  },
  render: function() {
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
      <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={this.props.link}>
          <div className="header">
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );
  }
});
