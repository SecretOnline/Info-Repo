window.repo = window.repo || {};
window.repo.InfoCardList = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      categories: []
    };
  },
  render: function() {
    var self = this;
    var cardNodes = this.props.info.sort(function(a, b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map(function(info) {
      // Replace category names with category objects
      info.categories.forEach(function(cat, index) {
        info.categories[index] = self.props.categories.find(function(item) {
          return item.title === cat;
        }) || info.categories[index];
      });

      return (
        <repo.InfoCard data={info} key={info.title} />
      )
    });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
});
