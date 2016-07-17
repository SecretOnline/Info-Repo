import LinkGroup from './LinkGroup.jsx';

export default class LinkGroupList extends React.Component {
  static get defaultProps() {
    return {
      links: [],
      click: null
    };
  }

  render() {
    var cardNodes = this.props.links
      .map((groupData) => {
        if (this.props.click && typeof this.props.click === 'function') {
          return (
            <LinkGroup click={this.props.click} data={groupData} key={groupData.title} />
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
