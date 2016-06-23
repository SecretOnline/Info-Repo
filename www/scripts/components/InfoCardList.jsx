window.repo = window.repo || {};
window.repo.InfoCardList = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      link: '/info'
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
      return (
        <repo.InfoCard data={info} key={info.title} link={self.props.link + '/' + encodeURIComponent(repo.modTitle(info.title))} />
      );
    });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
});
