import LinkCard from '../components/LinkCard.jsx';

export default class LinkGroup extends React.Component {
  static get defaultProps() {
    return {
      data: {
        items: [],
        title: 'Loading...'
      },
      click: null
    };
  }

  render() {
    var cardNodes = this.props.data.items
      .map((cardData) => {
        if (this.props.click && typeof this.props.click === 'function') {
          return (
            <LinkCard click={this.props.click} data={cardData} key={cardData.title} />
          );
        } else {
          return (
            <LinkCard data={cardData} key={cardData.title} />
          );
        }
      });

    return (
      <div class="link-group">
        <h2>{this.props.data.title}</h2>
        <div className="card-list link-card-list">
          {cardNodes}
        </div>
      </div>
    );
  }
}
