import CategoryCard from '../cards/CategoryCard.jsx';

export default class CategoryCardList extends React.Component {
  static get defaultProps() {
    return {
      categories: [],
      click: null
    };
  }

  render() {
    var cardNodes = this.props.categories
      .map((cardData) => {
        return (
          <CategoryCard data={cardData} key={cardData.title} link={this.props.link} />
        );
      });

    return (
      <div className="card-list category-card-list">
        {cardNodes}
      </div>
    );
  }
}
