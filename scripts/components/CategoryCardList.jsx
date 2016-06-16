window.repo = window.repo || {};
window.repo.CategoryCardList = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    var self = this;
    var categoryPromise = window.repo.get(this.props.caturl)
      .then(JSON.parse);
    categoryPromise
      .then(function(categories) {
        self.setState({data: categories});
      });
  },
  render: function() {
    var cardNodes = this.state.data.sort(function(a, b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map(function(cardData) {
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
