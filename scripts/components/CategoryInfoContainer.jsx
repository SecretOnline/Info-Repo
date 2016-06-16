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
    return (
      <div>
        <h2>Categories</h2>
        <repo.CategoryCardList categories={this.props.categories} click={this.categoryClick} />
      </div>
    );
  }
});
