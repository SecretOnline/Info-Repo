import React from 'react';
import helper from './helper';

export class LinkCard extends React.Component {
  getDefaultProps() {
    return {
      data: {
        color: '',
        darkText: false,
        title: 'Loading...',
        method: 'link',
        src: 'https://repo.nmsdb.info'
      },
      click: null
    };
  }

  render() {
    // Create the main
    var classes = [
      'card',
      'link-card'
    ];
    if (this.props.data.darkText) {
      classes.push('dark-text');
    }

    var headerStyle = {};
    if (this.props.data.color) {
      headerStyle.backgroundColor = this.props.data.color;
    }

    var headerList = [
      <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
    ];

    if (this.props.data.method === 'link') {
      headerList.push(<img src={'/res/external' + ((this.props.data.darkText) ? '-dark' : '') + '.svg'} alt="Open in new tab/window" className="external" key="external" />);
    } else if (this.props.data.method === 'yt') {
      headerList.push(<img src={'/res/youtube' + ((this.props.data.darkText) ? '-dark' : '') + '.svg'} alt="Open in YouTube" className="external" key="external" />);
    }

    var url = this.props.data.src;
    if (this.props.data.method === 'yt') {
      url = 'https://www.youtube.com/watch?v=' + url;
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <a href={url} target="_blank">
          <div className="header" style={headerStyle}>
            {headerList}
          </div>
        </a>
      </div>
    );
  }
});
