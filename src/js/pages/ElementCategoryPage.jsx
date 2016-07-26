import {ElementCardList} from '../components';
import helper from '../helper';

export default class ElementCategoryPage extends React.Component {
  render() {
    var groupName = this.props.routeParams.group
    var actualName;

    var filteredElements = this.props.route.elements
      .filter((element) => {
        if (element.categories) {
          return element.categories.find((group) => {
            var res = helper.modTitle(group) === groupName;
            // Quick way of getting the group's decoded name
            if (res && !actualName) {
              actualName = group;
            }
            return res;
          });
        } else {
          return false;
        }
      });

    return (
      <div class="page element-page">
        <h1>Elements: {actualName}</h1>
        <ElementCardList elements={filteredElements} link="/element" />
      </div>
    );
  }
}
