import {SearchBox} from '../components';

export default class SearchPage extends React.Component {
  render() {
    function goTo(result) {
      ReactRouter.browserHistory.push(`/search/${encodeURIComponent(result)}`);
    }

    return (
      <div className="page search-page">
        <h1>Search</h1>
        <SearchBox callback={goTo} />
      </div>
    );
  }
}
