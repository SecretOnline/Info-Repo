import SearchBox from '../components/SearchBox.jsx';

export default class SearchPage extends React.Component {
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
