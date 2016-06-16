window.repo = window.repo || {};
window.repo.ElementCard = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },
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
  toggleExpanded: function() {
    this.setState({expanded: !this.state.expanded});
  },
  doClickCallback() {
    if (this.props.click && typeof this.props.click === 'function') {
      this.props.click(this.props.data);
    } else {
      this.toggleExpanded();
    }
  },
  render: function() {
    // Create the main
    var classes = [
      'card',
      'element-card'
    ];
    if (this.state.expanded) {
      classes.push('expanded');
    }

    var headerStyle = {};
    if (this.props.data.color) {
      headerStyle.backgroundColor = this.props.data.color;
    }

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>),
      (<h3 className="element-symbol" key="header-symbol">{this.props.data.symbol}</h3>)
    ];


    if (!this.state.expanded) {
      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <div className="header" onClick={this.doClickCallback} style={headerStyle}>
            {headerList}
          </div>
        </div>
      );
    } else {
      // Set card content stuff
      var bodyList = [];
      if (this.props.data.text && this.props.data.text.length) {
        var descNodes = this.props.data.text.map(function(desc, index) {
          return (
            <p key={index}>{desc}</p>
          )
        });
        bodyList.push((<div className="information" key="body-desc">{descNodes}</div>));
      }
      if (this.props.data.places && this.props.data.places.length) {
        var placeNodes = this.props.data.places.map(function(place) {
          return (
            <li key={place}>{place}</li>
          )
        });
        bodyList.push((<h4 key="body-places-title">Places</h4>));
        bodyList.push((<ul className="places" key="body-places">{placeNodes}</ul>));
      }

      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <div className="header" onClick={this.doClickCallback} style={headerStyle}>
            {headerList}
          </div>
          <div className="card-content">
            {bodyList}
          </div>
        </div>
      );
    }
  }
});
