import {SearchBox} from '../components';

export default class SearchPage extends React.Component {
  render() {
    function goTo(result) {
      ReactRouter.browserHistory.push(`/search/${encodeURIComponent(result)}`);
    }

    return (
      <div class="page search-page">
        <h1>Search</h1>
        <SearchBox callback={goTo} />
      </div>
    );
  }
}
