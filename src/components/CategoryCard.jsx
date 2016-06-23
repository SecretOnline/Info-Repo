import React from 'react';
import Link from 'react-router/lib/Link';
import helper from '../helper.jsx';

export default class CategoryCard extends React.Component {
  getDefaultProps() {
    return {
      data: {
        title: 'Loading...',
        class: 'default'
      },
      click: null
    };
  }

  render() {
    // Create the main
    var classes = [
      'card',
      'category-card',
      'cat-' + this.props.data.class
    ];

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <Link to={this.props.link + '/' + encodeURIComponent(helper.modTitle(this.props.data.title))}>
          <div className="header">
            <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
          </div>
        </Link>
      </div>
    );
  }
}
