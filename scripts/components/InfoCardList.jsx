window.repo = window.repo || {};
window.repo.InfoCardList = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      categories: [],
      click: null
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

      if (self.props.click && typeof self.props.click === 'function') {
        return (
          <repo.InfoCard click={self.props.click} data={info} key={info.title} />
        );
      } else {
        return (
          <repo.InfoCard data={info} key={info.title} />
        );
      }
    });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
});
