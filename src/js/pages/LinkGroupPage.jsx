import {LinkCardList} from '../components';
import helper from '../helper';

export default class LinkGroupPage extends React.Component {
  static get defaultProps() {
    return {
      links: []
    };
  }

  render() {
    var groupName = this.props.routeParams.group
    var actualName;

    var filteredLinks = this.props.route.links
      .filter((link) => {
        if (link.groups) {
          return link.groups.find((group) => {
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
      <div className="page links-page">
        <h1>Links: {actualName}</h1>
        <LinkCardList links={filteredLinks} />
        <h2>Other</h2>
        <div className="card">
          <ReactRouter.Link to="/links">
            <div className="header">
              <h3 className="card-title">Back to All Links</h3>
            </div>
          </ReactRouter.Link>
        </div>
      </div>
    );
  }
}
