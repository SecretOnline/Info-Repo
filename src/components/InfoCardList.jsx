import InfoCard from '../components/InfoCard.jsx';
import helper from '../helper.jsx';

export default class InfoCardList extends React.Component {
  static get defaultProps() {
    return {
      info: [],
      link: '/info'
    };
  }

  render() {
    var cardNodes = this.props.info.sort((a, b) => {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map((info) => {
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
