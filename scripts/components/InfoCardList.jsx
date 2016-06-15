window.repo = window.repo || {};
window.repo.InfoCardList = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    var self = this;
    var infoPromise = window.repo.get(this.props.infourl)
      .then(JSON.parse);
    var categoryPromise = window.repo.get(this.props.caturl)
      .then(JSON.parse);
    Promise.all([infoPromise, categoryPromise])
      .then(function(proms) {

        proms[0].forEach(function(info) {
          // Replace category names with category objects
          info.categories.forEach(function(cat, index) {
            info.categories[index] = proms[1].find(function(item) {
              return item.title === cat;
            }) || info.categories[index];
          });
        });

        self.setState({data: proms[0]});
      });
  },
  render: function() {
    var cardNodes = this.state.data.map(function(cardData) {
      return (
        <repo.InfoCard data={cardData} key={cardData.title} />
      )
    });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
});
