import InfoSpotlight from '../components/InfoSpotlight.jsx';

export default class InfoAllPage extends React.Component {
  render() {
    var spotlights = this.props.route.info.sort((a, b) => {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map((info) => {
      return (
        <InfoSpotlight data={info} key={info.title} />
      );
    });


    return (
      <div class="page info-page">
        <h2>Information</h2>
        <div>
          {spotlights}
        </div>
      </div>
    );
  }
}
