window.repo = window.repo || {};
window.repo.CategoryInfoContainer = React.createClass({
  getInitialState: function() {
    return {
      category: null
    };
  },
  getDefaultProps: function() {
    return {
      info: [],
      categories: [],
      click: null,
      clickCategory: null
    };
  },
  categoryClick: function(cat) {
    this.setState({category: cat});

    if (this.props.clickCategory && typeof this.props.clickCategory === 'function') {
      this.props.clickCategory(cat);
    }
  },
  infoClick: function(info) {
    if (this.props.click && typeof this.props.click === 'function') {
      this.props.click(info);
    }
  },
  render: function() {
    var self = this;
    if (this.state.category) {
      var filteredList = this.props.info.filter(function(info) {
        return info.categories.find(function(category) {
          return category.title === self.state.category.title;
        });
      });

      if (filteredList.length) {
        return (
          <div>
            <h2>Categories</h2>
            <repo.CategoryCardList categories={this.props.categories} click={this.categoryClick} />
            <h2>Information</h2>
            <repo.InfoCardList categories={this.props.categories} info={filteredList} click={this.infoClick} />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Categories</h2>
            <repo.CategoryCardList categories={this.props.categories} click={this.categoryClick} />
            <h2>Information</h2>
            <p>No results were found for this category</p>
          </div>
        );
      }
    }

    return (
      <div>
        <h2>Categories</h2>
        <repo.CategoryCardList categories={this.props.categories} click={this.categoryClick} />
      </div>
    );
  }
});
