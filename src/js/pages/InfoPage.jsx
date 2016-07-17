import InfoCardList from '../lists/InfoCardList.jsx';

export default class InfoPage extends React.Component {
  render() {
    return (
      <div class="page info-page">
        <h2>Information</h2>
        <InfoCardList info={this.props.route.info} link="/info" />
        <p className="light">
          Want all the information on one page? Don't worry, I have <ReactRouter.Link to="/info/all">just the link</ReactRouter.Link> for you.
        </p>
      </div>
    );
  }
}
