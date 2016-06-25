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
    var self = this;
    var cardNodes = this.props.data.items
      .map(function(cardData) {
        if (self.props.click && typeof self.props.click === 'function') {
          return (
            <LinkCard click={self.props.click} data={cardData} key={cardData.title} />
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
