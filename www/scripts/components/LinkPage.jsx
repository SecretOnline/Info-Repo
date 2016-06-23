import React from 'react';
import LinkGroupList from '../components/LinkGroupList.jsx';

export class LinkPage extends React.Component {
  getDefaultProps() {
    return {
      links: []
    };
  }

  render() {
    return (
      <div class="page links-page">
        <h2>Links</h2>
        <LinkGroupList links={this.props.route.links} click={this.setSpotlight} />
      </div>
    );
  }
}
