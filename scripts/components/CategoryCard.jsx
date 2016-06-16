window.repo = window.repo || {};
window.repo.CategoryCard = React.createClass({
  getDefaultProps: function() {
    return {
      data: {
        title: 'Loading...',
        class: 'default'
      },
      click: null
    };
  },
  doClickCallback() {
    this.props.click(this.props.data);
  },
  render: function() {
    // Create the main
    var classes = [
      'card',
      'category-card',
      'cat-' + this.props.data.class
    ];

    if (this.props.click && typeof this.props.click === 'function') {
      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <div className="header" onClick={this.doClickCallback}>
            <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
          <div className="header">
            <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
          </div>
        </div>
      );
    }
  }
});
