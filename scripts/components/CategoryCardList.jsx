window.repo = window.repo || {};
window.repo.CategoryCardList = React.createClass({
  getDefaultProps: function() {
    return {
      categories: [],
      click: null
    };
  },
  render: function() {
    var self = this;
    var cardNodes = this.props.categories
      .sort(function(a, b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
      .map(function(cardData) {
        if (self.props.click && typeof self.props.click === 'function') {
          return (
            <repo.CategoryCard click={self.props.click} data={cardData} key={cardData.title} />
          );
        } else {
          return (
            <repo.CategoryCard data={cardData} key={cardData.title} />
          );
        }
      });

    return (
      <div className="card-list category-card-list">
        {cardNodes}
      </div>
    );
  }
});
