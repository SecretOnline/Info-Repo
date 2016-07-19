import CategoryCardList from '../lists/CategoryCardList.jsx';
import helper from '../helper';

export default class CategoryPage extends React.Component {
  render() {
    var categories = this.props.route.categories.sort(helper.titleSort);
    return (
      <div class="page category-page">
        <h1>Categories</h1>
        <CategoryCardList categories={categories} link="/categories" />
      </div>
    );
  }
}
