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

      if (self.props.click && typeof self.props.click === 'function') {
        return (
          <repo.ElementCard click={self.props.click} data={element} key={element.title} />
        );
      } else {
        return (
          <repo.ElementCard data={element} key={element.title} />
        );
      }
    });

    return (
      <div className="card-list element-card-list">
        {cardNodes}
      </div>
    );
  }
});
