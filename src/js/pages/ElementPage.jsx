import {ElementCardList} from '../components';
import helper from '../helper';

export default class ElementPage extends React.Component {
  render() {
    // Get a list of all the groups
    var groupList = [];
    this.props.route.elements
      .forEach((element) => {
        if (element.categories) {
          element.categories.forEach((elClass) => {
            if (groupList.indexOf(elClass) === -1) {
              groupList.push(elClass);
            }
          });
        }
      });
    var groupElements = groupList
      .map((group) => {
        return (
          <li key={group}>
            <ReactRouter.Link to={`/elements/${helper.modTitle(group)}`}>
              {group}
            </ReactRouter.Link>
          </li>
        );
      });

    return (
      <div class="page element-page">
        <h1>Elements</h1>
        <h2>Classes</h2>
        <ul className="tag-list">
          {groupElements}
        </ul>
        <h2>All Elements</h2>
        <ElementCardList elements={this.props.route.elements} link="/element" />
        <p className="light">
          Want all the elements on one page? Don't worry, I have <ReactRouter.Link to="/elements/all">just the link</ReactRouter.Link> for you.
        </p>
      </div>
    );
  }
}
