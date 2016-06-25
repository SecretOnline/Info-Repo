import LinkGroup from '../components/LinkGroup.jsx';

export default class LinkGroupList extends React.Component {
  static get defaultProps() {
    return {
      links: [],
      click: null
    };
  }

  render() {
    var self = this;
    var cardNodes = this.props.links
      .map(function(groupData) {
        if (self.props.click && typeof self.props.click === 'function') {
          return (
            <LinkGroup click={self.props.click} data={groupData} key={groupData.title} />
          );
        } else {
          return (
            <LinkGroup data={groupData} key={groupData.title} />
          );
        }
      });

    return (
      <div class="link-group-list">
        {cardNodes}
      </div>
    );
  }
}
