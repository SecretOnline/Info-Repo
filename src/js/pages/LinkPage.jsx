import LinkGroupList from '../lists/LinkGroupList.jsx';

export default class LinkPage extends React.Component {
  static get defaultProps() {
    return {
      links: []
    };
  }

  render() {
    return (
      <div class="page links-page">
        <h1>Links</h1>
        <LinkGroupList links={this.props.route.links} click={this.setSpotlight} />
      </div>
    );
  }
}
