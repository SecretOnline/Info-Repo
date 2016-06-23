import React from 'react';
import ElementCard from './components/ElementCard';
import helper from './helper';

export class ElementCardList extends React.Component {
  getDefaultProps() {
    return {
      elements: [],
      click: null
    };
  }
  
  render() {
    var self = this;
    var cardNodes = this.props.elements.map(function(element) {
      return (
        <ElementCard data={element} key={element.title} link={self.props.link} />
      );
    });

    return (
      <div className="card-list element-card-list">
        {cardNodes}
      </div>
    );
  }
});
