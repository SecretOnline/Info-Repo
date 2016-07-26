import {InfoSpotlight} from '../components';

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
        <h1>Information: All Information</h1>
        <p>
          This page lists all of the information in the Repository on a single page. For better linking and referencing, use the <ReactRouter.Link to="/info">standard information list</ReactRouter.Link>.
        </p>
        <div>
          {spotlights}
        </div>
      </div>
    );
  }
}
