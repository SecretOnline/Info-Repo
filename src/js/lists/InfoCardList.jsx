import InfoCard from '../cards/InfoCard.jsx';

export default class InfoCardList extends React.Component {
  static get defaultProps() {
    return {
      info: [],
      link: '/info'
    };
  }

  render() {
    var cardNodes = this.props.info
      .map((info) => {
        return (
          <InfoCard data={info} key={info.title} link={this.props.link} />
        );
      });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
}
