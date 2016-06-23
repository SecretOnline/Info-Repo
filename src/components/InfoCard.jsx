import React from 'react';
import Link from 'react-router/lib/Link';
import helper from '../helper.jsx';

export default class InfoCard extends React.Component {
  static get defaultProps() {
    return {
      data: {
        title: 'Loading...',
        categories: [],
        text: ['Please wait, this shouldn\'t take too long'],
        sources: [],
        related: []
      }
    };
  }

  render() {
    // Create the main
    var classes = [
      'card',
      'info-card'
    ];
    if (this.props.data.categories.length) {
      classes.push('cat-' + this.props.data.categories[0].class);
    }

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>)
    ];

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <Link to={this.props.link}>
          <div className="header" onClick={helper.scrollToTop}>
            {headerList}
          </div>
        </Link>
      </div>
    );

  }
}
