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
      }
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
    // if (window.location.hash === window.repo.modTitle(this.props.data.title)) {
    //   classes.push('expanded');
    // }
    classes.push('expanded');

    var categoryNodes = (this.props.data.categories || []).map(function(cat) {
      return (
        <li data-id={cat.class} key={cat.class}><a href={'cat#' + window.repo.modTitle(cat.title)}>{cat.title}</a></li>
      )
    });
    var infoNodes = (this.props.data.text || []).map(function(info, index) {
      return (
        <p key={index}>{info}</p>
      )
    });
    var sourceNodes = (this.props.data.sources || []).map(function(src) {
      return (
        <li key={src}><a href={src}>{window.repo.truncateString(src, 10)}</a></li>
      )
    });
    var relatedNodes = (this.props.data.related || []).map(function(rel) {
      return (
        <li key={rel}><a href={'#' + rel}>TODO: Put actual descriptive related text here, fix link</a></li>
      )
    });

    return (
      <div className={classes.join(' ')} id={this.props.data.title}>
        <div className="header">
          <h3 className="card-title">{this.props.data.title}</h3>
          <ul className="categories">{categoryNodes}</ul>
        </div>
        <div className="card-content">
          <div className="information">{infoNodes}</div>
          <ul className="sources">{sourceNodes}</ul>
          <ul className="related">{relatedNodes}</ul>
        </div>
      </div>
    );
  }
});
