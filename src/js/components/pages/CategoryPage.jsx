import CategoryCardList from '../components/CategoryCardList.jsx';

export default class CategoryPage extends React.Component {
  render() {
    return (
      <div class="page category-page">
        <CategoryCardList categories={this.props.route.categories} link="/categories" />
      </div>
    );
  }
}
