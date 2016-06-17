window.repo = window.repo || {};
window.repo.LinkGroupList = React.createClass({
  getDefaultProps: function() {
    return {
      links: [],
      click: null
    };
  },
  render: function() {
    var self = this;
    var cardNodes = this.props.links
      .map(function(groupData) {
        if (self.props.click && typeof self.props.click === 'function') {
          return (
            <repo.LinkGroup click={self.props.click} data={groupData} key={groupData.title} />
          );
        } else {
          return (
            <repo.LinkGroup data={groupData} key={groupData.title} />
          );
        }
      });

    return (
      <div class="link-group-list">
        {cardNodes}
      </div>
    );
  }
});
