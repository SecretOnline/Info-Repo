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

    function generalSearch(query) {
      var title = doc.querySelector('.search-title');
      title.textContent = 'Search: ' + query;
      var container = doc.querySelector('.search-list');

      var scores = {};
      var infoIndexArr = Object.keys(info);

      // Get the score for a aprticulat piece of information
      infoIndexArr.forEach((index) => {
        var item = info[index];
        var score = getSearchScore(query, item);
        var card = createInfoCard(item);

        // Don't add anything with a score of 0
        if (score > 0) {
          if (!scores[score])
            scores[score] = [];

          scores[score].push(card);
        }
      });
      // Search elements as well
      var resIndexArr = Object.keys(resources);
      // Get the score for an element
      resIndexArr.forEach((index) => {
        var item = resources[index];
        var score = getElementSearchScore(query, item);

        // Don't add anything with a score of 0
        if (score > 0) {
          if (!scores[score])
            scores[score] = [];

          var card = createResourceCard(item);
          scores[score].push(card);
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
        scores[score].forEach((card) => {
          arr.push(card);
        });
        cardArr = arr.concat(cardArr);
      });

      ga('send', 'event', 'Search', 'search', query, cardArr.length);

      // Expand card if only one item returned in search
      if (cardArr.length === 1) {
        cardArr[0].classList.add('expanded');
        if (cardArr[0].classList.contains('info-card'))
          addCardInfo(cardArr[0], info[cardArr[0].dataset.title]);
        else if (cardArr[0].classList.contains('element-card'))
          addResourceInfo(cardArr[0], resources[cardArr[0].dataset.name]);
      }

      container.innerHTML = '';
      cardArr.forEach((item) => {
        container.appendChild(item);
      });

      win.history.replaceState(null, '', '?search=' + (query.replace(/\s/g, "_")));
      win.scroll(0, 0);
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

    return (
      <div class="page search-page">
        <h2>Search</h2>
        <SearchBox callback={goTo} />
      </div>
    );
  }
}
