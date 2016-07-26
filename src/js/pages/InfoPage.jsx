import {InfoCardList} from '../components';
import helper from '../helper';

export default class InfoPage extends React.Component {
  render() {
    var info = this.props.route.info.sort(helper.titleSort);
    return (
      <div class="page info-page">
        <h1>Information</h1>
        <InfoCardList info={info} link="/info" />
        <p className="light">
          Want all the information on one page? Don't worry, I have <ReactRouter.Link to="/info/all">just the link</ReactRouter.Link> for you.
        </p>
      </div>
    );
  }
}
