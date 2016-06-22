window.repo = window.repo || {};
window.repo.CategoryPage = React.createClass({
  render: function() {
    return (
      <div class="page category-page">
        <repo.CategoryCardList categories={this.props.route.categories} link="/categories" />
      </div>
    );
  }
});
