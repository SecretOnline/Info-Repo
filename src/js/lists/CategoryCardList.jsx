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
      .sort((a, b) => {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
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
