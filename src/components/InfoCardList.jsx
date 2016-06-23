import React from 'react';
import InfoCard from '../components/InfoCard.jsx';
import helper from '../helper.jsx';

export default class InfoCardList extends React.Component {
  static get defaultProps() {
    return {
      info: [],
      link: '/info'
    };
  }

  render() {
    var self = this;
    var cardNodes = this.props.info.sort(function(a, b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map(function(info) {
      return (
        <InfoCard data={info} key={info.title} link={self.props.link + '/' + encodeURIComponent(helper.modTitle(info.title))} />
      );
    });

    return (
      <div className="card-list info-card-list">
        {cardNodes}
      </div>
    );
  }
}
