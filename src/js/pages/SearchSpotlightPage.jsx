import {
  InfoSpotlight,
  InfoCardList
} from '../components';
import helper from '../helper';
import search from '../search';

export default class SearchResultPage extends React.Component {
  static get defaultProps() {
    return {
      info: []
    };
  }

  render() {
    var query = this.props.routeParams.search;
    var infoList = this.props.route.info;

    var spotlight = infoList.find((info) => {
      return this.props.routeParams.info === helper.modTitle(info.title);
    });
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

    return (
      <div className="page search-page">
        <InfoSpotlight data={spotlight} highlighted={highlighted} />
        <h2>{`Search - ${query}`}</h2>
        <InfoCardList info={search.generalSearch(query, infoList)} link={`/search/${encodeURIComponent(query)}`} />
        <h2>Other</h2>
        <div key="back" className="card">
          <ReactRouter.Link to="/search">
            <div className="header">
              <h3 className="card-title">Back to Search</h3>
            </div>
          </ReactRouter.Link>
        </div>
      </div>
    );
  }
}
