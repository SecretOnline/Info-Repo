window.repo = window.repo || {};
window.repo.ElementCardList = React.createClass({
  getDefaultProps: function() {
    return {
      elements: [],
      click: null
    };
  },
  render: function() {
    var self = this;
    var cardNodes = this.props.elements.map(function(element) {
      return (
        <repo.ElementCard data={element} key={element.title} link={self.props.link + '/' + encodeURIComponent(repo.modTitle(element.title))} />
      );
    });

    return (
      <div className="card-list element-card-list">
        {cardNodes}
      </div>
    );
  }
});
