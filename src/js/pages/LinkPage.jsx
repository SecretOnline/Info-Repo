import {LinkCardList} from '../components';
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

    // Get a list of all the groups
    var groupList = [];
    this.props.route.links
      .forEach((link) => {
        if (link.groups) {
          link.groups.forEach((group) => {
            if (groupList.indexOf(group) === -1) {
              groupList.push(group);
            }
          });
        }
      });
    var groupElements = groupList
      .map((group) => {
        return (
          <li key={group}>
            <ReactRouter.Link to={`/links/${helper.modTitle(group)}`}>
              {group}
            </ReactRouter.Link>
          </li>
        );
      });

    return (
      <div className="page links-page">
        <h1>Links</h1>
        <h2>Groups</h2>
        <ul className="tag-list">
          {groupElements}
        </ul>
        <h2>All Links</h2>
        <LinkCardList links={allLinks} />
      </div>
    );
  }
}
