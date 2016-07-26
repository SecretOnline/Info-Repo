import {
  SearchBox,
  InfoCardList
} from '../components';
import search from '../search';

export default class SearchResultPage extends React.Component {
  static get defaultProps() {
    return {
      info: []
    };
  }

  render() {
    function goTo(result) {
      ReactRouter.browserHistory.push(`/search/${encodeURIComponent(result)}`);
    }

    var query = this.props.routeParams.search;
    var infoList = this.props.route.info;

    return (
      <div class="page search-page">
        <h1>{`Search: ${query}`}</h1>
        <SearchBox callback={goTo} text={query} />
        <InfoCardList info={search.generalSearch(query, infoList)} link={`/search/${encodeURIComponent(query)}`} />
      </div>
    );
  }
}
