import SearchBox from '../components/SearchBox.jsx';
import InfoCardList from '../components/InfoCardList.jsx';
import search from '../search.jsx';

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
        <h2>{`Search - ${query}`}</h2>
        <SearchBox callback={goTo} text={query} />
        <InfoCardList info={search.generalSearch(query, infoList)} link={`/search/${encodeURIComponent(query)}`} />
      </div>
    );
  }
}
