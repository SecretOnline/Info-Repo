window.repo = window.repo || {};
window.repo.CategoryCardList = React.createClass({
  getDefaultProps: function() {
    return {
      categories: []
    }
  },
  render: function() {
    var cardNodes = this.props.categories
      .sort(function(a, b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
      .map(function(cardData) {
        return (
          <repo.CategoryCard data={cardData} key={cardData.title} />
        )
      });

    return (
      <div className="card-list category-card-list">
        {cardNodes}
      </div>
    );
  }
});
