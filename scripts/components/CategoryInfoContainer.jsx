window.repo = window.repo || {};
window.repo.CategoryInfoContainer = React.createClass({
  getDefaultProps: function() {
    return {
      info: [],
      categories: [],
      cat: null,
      link: '/categories'
    };
  },
  render: function() {
    var self = this;
    if (this.props.cat) {
      var filteredList = this.props.info.filter(function(info) {
        return info.categories.find(function(category) {
          return category.title === self.props.cat.title;
        });
      });

      if (filteredList.length) {
        return (
          <div>
            <h2>Information - {this.props.cat.title}</h2>
            <repo.InfoCardList info={filteredList} link={this.props.link + '/' + encodeURIComponent(repo.modTitle(this.props.cat.title))} />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Categories</h2>
            <repo.CategoryCardList categories={this.props.categories} link={this.props.link} />
            <h2>No Results</h2>
            <p>No results were found for this category</p>
          </div>
        );
      }
    }

    return (
      <div>
        <h2>Categories</h2>
        <repo.CategoryCardList categories={this.props.categories} link={this.props.link} />
      </div>
    );
  }
});
