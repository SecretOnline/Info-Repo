window.repo = window.repo || {};
window.repo.InfoCardList = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    var self = this;
    window.repo.get(this.props.url)
      .then(JSON.parse)
      .then(function(result) {
        self.setState({data: result});
      });
  },
  render: function() {
    var cardNodes = this.state.data.map(function(cardData) {
      return (
        <repo.InfoCard data={cardData} key={cardData.title} />
      )
    });

    return (
      <div className="info-card-list">
        {cardNodes}
      </div>
    );
  }
});
