window.repo = window.repo || {};
window.repo.InfoPage = React.createClass({
  render: function() {
    return (
      <div class="page info-page">
        <h2>Information</h2>
        <repo.InfoCardList info={this.props.route.info} link="/info" />
      </div>
    );
  }
});
