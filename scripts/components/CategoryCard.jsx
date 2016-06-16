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
  doClickCallback: function() {
    if (this.props.click && typeof this.props.click === 'function') {
      this.props.click(this.props.data);
    }
  },
  render: function() {
    // Create the main
    var classes = [
      'card',
      'category-card',
      'cat-' + this.props.data.class
    ];

    return (
      <div className={classes.join(' ')} id={window.repo.modTitle(this.props.data.title)}>
        <div className="header" onClick={this.doClickCallback}>
          <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
        </div>
      </div>
    );
  }
});
