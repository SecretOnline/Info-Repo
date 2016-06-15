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
      'info-card'
    ];
    if (this.props.data.categories.length) {
      classes.push('cat-' + this.props.data.categories[0]);
    }
    if (window.location.hash === window.repo.modTitle(this.props.data.title)) {
      classes.push('expanded');
    }

    var categoryNodes = (this.props.data.categories || []).map(function(cat) {
      return (
        <li data-id={cat} key={cat}><a href={'cat#' + cat}>{cat}</a></li>
      )
    });
    var infoNodes = (this.props.data.text || []).map(function(info, index) {
      return (
        <p key={index}>{info}</p>
      )
    });
    var sourceNodes = (this.props.data.sources || []).map(function(src) {
      return (
        <li key={src}><a href={src}>TODO: Put actual descriptive source text here</a></li>
      )
    });
    var relatedNodes = (this.props.data.related || []).map(function(rel) {
      return (
        <li key={rel}><a href={'#' + rel}>TODO: Put actual descriptive related text here, fix link</a></li>
      )
    });

    return (
      <div className={classes.join(' ')} id={this.props.data.title}>
        <div class="header">
          <h3 class="card-title">{this.props.data.title}</h3>
          <ul class="categories">{categoryNodes}</ul>
        </div>
        <div class="card-content">
          <div class="information">{infoNodes}</div>
          <ul class="sources">{sourceNodes}</ul>
          <ul class="related">{relatedNodes}</ul>
        </div>
      </div>
    );
  }
});
