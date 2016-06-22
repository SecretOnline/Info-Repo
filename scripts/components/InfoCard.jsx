window.repo = window.repo || {};
window.repo.InfoCard = React.createClass({
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
  doClickCallback: function() {
    if (this.props.click && typeof this.props.click === 'function') {
      this.props.click(this.props.data);
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

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>)
    ];

    return (
      <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={this.props.link}>
          <div className="header" onClick={this.doClickCallback}>
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );

  }
});
