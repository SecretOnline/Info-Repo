import LinkCardList from '../lists/LinkCardList.jsx';
import helper from '../helper';

export default class LinkPage extends React.Component {
  static get defaultProps() {
    return {
      links: []
    };
  }

  render() {
    var allLinks = this.props.route.links
      .concat() // Create a copy of the array, don't modify original
      .sort(helper.titleSort);

    return (
      <div class="page links-page">
        <h1>Links</h1>

        <h2>All Links</h2>
        <LinkCardList links={allLinks} />
      </div>
    );
  }
}
