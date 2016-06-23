import React from 'react';
import CategoryCardList from './components/CategoryCardList';

export class CategoryPage extends React.Component {
  render() {
    return (
      <div class="page category-page">
        <CategoryCardList categories={this.props.route.categories} link="/categories" />
      </div>
    );
  }
});
