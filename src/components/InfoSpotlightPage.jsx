import InfoSpotlight from '../components/InfoSpotlight.jsx';
import InfoCardList from '../components/InfoCardList.jsx';
import helper from '../helper.jsx';

export default class InfoSpotlightPage extends React.Component {
  render() {
    var self = this;

    var spotlight = this.props.route.info.find(function(info) {
      return self.props.routeParams.info === helper.modTitle(info.title);
    });
    var relatedData = [];

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
      relatedData = spotlight.related.map(function(rel) {
        return self.props.route.info.find(function(item) {
          return rel === item.title;
        });
      });
    }

    var content = [
      <InfoSpotlight key="spotlight" data={spotlight} />
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
