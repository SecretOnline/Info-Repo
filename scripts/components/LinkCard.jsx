window.repo = window.repo || {};
window.repo.LinkCard = React.createClass({
  getDefaultProps: function() {
    return {
      data: {
        color: '',
        darkText: false,
        title: 'Loading...',
        method: 'link',
        src: 'https://repo.nmsdb.info'
      },
      click: null
    };
  },
  doClickCallback: function() {
    if (this.props.click && typeof this.props.click === 'function') {
      this.props.click(this.props.data);
    }
  },
  render: function() {
    // Create the main
    var classes = [
      'card',
      'link-card'
    ];
    if (this.props.data.darkText) {
      classes.push('dark-text');
    }

    var headerStyle = {};
    if (this.props.data.color) {
      headerStyle.backgroundColor = this.props.data.color;
    }

    var header = (
      <div className="header" onClick={this.doClickCallback} style={headerStyle}>
        <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
      </div>
    );

    if (this.props.data.method === 'link') {
      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <a href={this.props.data.src}>
            {header}
          </a>
        </div>
      );
    }

    return (
      <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
        {header}
      </div>
    );
  }
});
