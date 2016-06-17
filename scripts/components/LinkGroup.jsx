window.repo = window.repo || {};
window.repo.CategoryCardList = React.createClass({
  getDefaultProps: function() {
    return {
      data: {
        items: [],
        title: 'Loading...'
      },
      click: null
    };
  },
  render: function() {
    var self = this;
    var cardNodes = this.props.data.items
      .map(function(cardData) {
        if (self.props.click && typeof self.props.click === 'function') {
          return (
            <repo.LinkCard click={self.props.click} data={cardData} key={cardData.title} />
          );
        } else {
          return (
            <repo.LinkCard data={cardData} key={cardData.title} />
          );
        }
      });

    return (
      <div class="link-group">
        <h2>{this.props.data.title}</h2>
        <div className="card-list link-card-list">
          {cardNodes}
        </div>
      </div>
    );
  }
});
