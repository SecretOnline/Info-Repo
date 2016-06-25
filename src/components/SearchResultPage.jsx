import SearchBox from '../components/SearchBox.jsx';
import InfoCardList from '../components/InfoCardList.jsx';

export default class SearchResultPage extends React.Component {
  render() {
    function goTo(result) {
      ReactRouter.browserHistory.push(`/search/${encodeURIComponent(result)}`);
    }

    return (
      <div class="page search-page">
        <h2>Search</h2>
        <SearchBox callback={goTo} />
      </div>
    );
  }
}
