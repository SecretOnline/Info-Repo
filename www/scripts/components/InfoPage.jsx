import React from 'react';
import InfoCardList from './components/InfoCardList';

export class InfoPage extends React.Component {
  render() {
    return (
      <div class="page info-page">
        <h2>Information</h2>
        <InfoCardList info={this.props.route.info} link="/info" />
      </div>
    );
  }
});
