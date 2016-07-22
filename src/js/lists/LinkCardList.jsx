import LinkCard from '../cards/LinkCard.jsx';

export default class LinkCardList extends React.Component {
  static get defaultProps() {
    return {
      links: []
    };
  }

  render() {
    var allLinks = this.props.links
      .map((link) => {
        return (
          <LinkCard data={link} key={link.title} />
        );
      });

    return (
      <div className="card-list link-card-list">
        {allLinks}
      </div>
    );
  }
}
