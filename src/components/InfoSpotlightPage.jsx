import InfoSpotlight from '../components/InfoSpotlight.jsx';
import InfoCardList from '../components/InfoCardList.jsx';
import helper from '../helper.jsx';

export default class InfoSpotlightPage extends React.Component {
  render() {
    var spotlight = this.props.route.info.find((info) => {
      return this.props.routeParams.info === helper.modTitle(info.title);
    });
    var relatedData = [];
    var highlighted = [];

    if (!spotlight) {
      spotlight = {
        title: 'Info Not Found',
        text: [
          'Unfortunately, we weren\'t able to find any information on what you were looking for',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
    }

    if (spotlight.related && spotlight.related.length) {
      relatedData = spotlight.related.map((rel) => {
        return this.props.route.info.find((item) => {
          return rel === item.title;
        });
      });
    }

    if (this.props.location.hash) {
      highlighted = this.props.location.hash
        .substr(1)
        .split(',')
        .map((item) => {
          try {
            return Number.parseInt(item);
          } catch (e) {
            return null;
          }
        })
        .filter((item) => {
          return item !== null;
        });
    }

    var content = [
      <InfoSpotlight key="spotlight" data={spotlight} highlighted={highlighted} />
    ];

    if (relatedData.length) {
      content.push(<h2 key="related-title">Related</h2>);
      content.push(<InfoCardList key="related" info={relatedData} link="/info" />);
    }

    content.push(<h2 key="nav-title">Other</h2>)
    content.push(
      <div key="back" className="card">
        <ReactRouter.Link to="/info">
          <div className="header">
            <h3 className="card-title">Back to All Information</h3>
          </div>
        </ReactRouter.Link>
      </div>
    );

    return (
      <div class="page info-page">
        {content}
      </div>
    );
  }
}
