import InfoCardList from '../lists/InfoCardList.jsx';
import helper from '../helper';

export default class InfoPage extends React.Component {
  render() {
    var info = this.props.route.info.sort(helper.titleSort);
    return (
      <div class="page info-page">
        <h2>Information</h2>
        <InfoCardList info={info} link="/info" />
        <p>
          Want all the information on one page? Don't worry, I have <ReactRouter.Link to="/info/all">just the link</ReactRouter.Link> for you.
        </p>
      </div>
    );
  }
}
