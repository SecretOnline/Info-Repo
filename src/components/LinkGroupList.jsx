import React from 'react';
import LinkGroup from '../components/LinkGroup.jsx';

export class LinkGroupList extends React.Component {
  getDefaultProps() {
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
