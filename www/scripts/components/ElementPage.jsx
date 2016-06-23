window.repo = window.repo || {};
window.repo.ElementPage = React.createClass({
  render: function() {
    return (
      <div class="page element-page">
        <h2>Elements</h2>
        <repo.ElementCardList elements={this.props.route.elements} link="/elements" />
      </div>
    );
  }
});
