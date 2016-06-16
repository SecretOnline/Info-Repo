window.repo = window.repo || {};
window.repo.InfoCard = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },
  getDefaultProps: function() {
    return {
      data: {
        title: 'Loading...',
        categories: [],
        text: ['Please wait, this shouldn\'t take too long'],
        sources: [],
        related: []
      },
      click: null
    };
  },
  toggleExpanded: function() {
    this.setState({expanded: !this.state.expanded});
  },
  doClickCallback: function() {
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
      'info-card'
    ];
    if (this.props.data.categories.length) {
      classes.push('cat-' + this.props.data.categories[0].class);
    }
    if (this.state.expanded) {
      classes.push('expanded');
    }

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>)
    ];
    if (this.state.expanded && this.props.data.categories && this.props.data.categories.length) {
      var categoryNodes = this.props.data.categories.map(function(cat) {
        return (<li data-id={cat.class} key={cat.class}><a href={'cat#' + window.repo.modTitle(cat.title)}>{cat.title}</a></li>)
      });
      headerList.push((<ul className="categories" key="header-categories">{categoryNodes}</ul>));
    }

    if (!this.state.expanded) {
      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <div className="header" onClick={this.doClickCallback}>
            {headerList}
          </div>
        </div>
      );
    } else {
      // Set card content stuff
      var bodyList = [];
      if (this.props.data.text && this.props.data.text.length) {
        var infoNodes = this.props.data.text.map(function(info, index) {
          return (
            <p key={index}>{info}</p>
          )
        });
        bodyList.push((<div className="information" key="body-info">{infoNodes}</div>));
      }
      if (this.props.data.sources && this.props.data.sources.length) {
        var sourceNodes = this.props.data.sources.map(function(src) {
          return (
            <li key={src}><a href={src}>{window.repo.truncateString(src, 10)}</a></li>
          )
        });
        bodyList.push((<h4 key="body-sources-title">Sources</h4>));
        bodyList.push((<ul className="sources" key="body-sources">{sourceNodes}</ul>));
      }
      if (this.props.data.related && this.props.data.related.length) {
        var relatedNodes = this.props.data.related.map(function(rel) {
          return (
            <li key={rel}><a href={'#' + window.repo.modTitle(rel)}>{rel}</a></li>
          )
        });
        bodyList.push((<h4 key="body-related-title">Related</h4>));
        bodyList.push((<ul className="related" key="body-related">{relatedNodes}</ul>));
      }

      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
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
});
