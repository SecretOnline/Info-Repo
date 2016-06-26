import SearchBox from '../components/SearchBox.jsx';
import InfoCardList from '../components/InfoCardList.jsx';

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

    function generalSearch(query, info) {
      var scores = {};
      var infoIndexArr = Object.keys(info);

      // Get the score for a aprticulat piece of information
      infoIndexArr.forEach((index) => {
        var item = info[index];
        var score = getSearchScore(query, item);

        // Don't add anything with a score of 0
        if (score > 0) {
          if (!scores[score])
            scores[score] = [];

          scores[score].push(item);
        }
      });

      var cardArr = [];
      var values = Object.keys(scores);
      // Sort using integers, not strings
      values.sort((one, two) => {
        // Sort as integers, not strings
        var a = parseInt(one);
        var b = parseInt(two);
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      });

      // Add information backwards (so highest score is at top)
      values.forEach((score) => {
        var arr = [];
        scores[score].forEach((item) => {
          arr.push(item);
        });
        cardArr = arr.concat(cardArr);
      });

      return cardArr;
    }

    function getSearchScore(query, info) {
      query = query.toLowerCase();
      var score = 0;

      var querySplit = query.split(/\W+/);
      var lTitle = info.title.toLowerCase();

      // Title contains
      if (lTitle.indexOf(query) > -1)
        score += 3;
      // Title contains parts
      querySplit.forEach((word) => {
        if (lTitle.match(new RegExp('\\s' + word + '\\s')))
          score += 5;
        if (lTitle.indexOf(word) > -1)
          score += 2;
      });
      info.text.forEach((text) => {
        var lText = text.toLowerCase();
        // Text contains
        if (lText.indexOf(query) > -1)
          score += 2;
        // Text contains parts
        querySplit.forEach((word) => {
          if (lText.match(new RegExp('\\s' + word + '\\s')))
            score += 1;
          if (lText.indexOf(word) > -1)
            score += 1;
        });
      });
      // Keywords
      if (info.keywords) {
        querySplit.forEach((word) => {
          if (info.keywords.indexOf(word) > -1) {
            score += 4;
          }
        });
      }

      return score;
    }

    var query = this.props.routeParams.search;
    var infoList = this.props.route.info;

    return (
      <div class="page search-page">
        <h2>Search</h2>
        <SearchBox callback={goTo} />
        <InfoCardList info={generalSearch(query, infoList)} />
      </div>
    );
  }
}
