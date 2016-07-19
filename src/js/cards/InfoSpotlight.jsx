import helper from '../helper';

export default class InfoSpotlight extends React.Component {
  static get defaultProps() {
    return {
      data: {
        title: 'Loading...',
        categories: [],
        text: ['Please wait, this shouldn\'t take too long'],
        sources: [],
        related: []
      },
      highlighted: []
    };
  }

  highlightChanger(event) {
    var index = event.target.dataset.index;

    var curr = window.location.hash
      .substr(1)
      .split(',');

    if (curr[0] === '') {
      curr = [];
    }

    if (curr.indexOf(index) > -1) {
      curr = curr.filter((item) => {
        return item !== index;
      });
    } else {
      curr.push(index);
    }

    if (curr.length) {
      curr.sort();
      ReactRouter.browserHistory.push(`${window.location.pathname}#${curr.join(',')}`);
    } else {
      ReactRouter.browserHistory.push(window.location.pathname);
    }
  }

  render() {
    var classes = [
      'spotlight',
      'info-card'
    ];

    if (this.props.data.spoiler) {
      classes.push('spoiler');
    }

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>)
    ];
    if (this.props.data.categories && this.props.data.categories.length) {
      classes.push(`cat-${this.props.data.categories[0].class}`);
      var categoryNodes = this.props.data.categories.map((cat) => {
        return (<li data-id={cat.class} key={cat.class}><ReactRouter.Link to={`/categories/${encodeURIComponent(helper.modTitle(cat.title))}`}>{cat.title}</ReactRouter.Link></li>)
      });
      headerList.push((<ul className="categories" key="header-categories">{categoryNodes}</ul>));
    }
    if (this.props.data.img) {
      var bgstyle = {
        backgroundImage: `url(${this.props.data.img})`
      };
      headerList.push(<div className="bgimg" style={bgstyle} key="bgimg"></div>);
    }
    // Set card content stuff
    var bodyList = [];
    if (this.props.data.text && this.props.data.text.length) {
      var infoNodes = this.props.data.text.map((info, index) => {
        var oneIndex = index + 1;
        if (this.props.highlighted.length) {
          if (this.props.highlighted.indexOf(oneIndex) > -1) {
            return (
              <p key={`${oneIndex}-highlight`} className="highlighted" data-index={oneIndex} onClick={this.highlightChanger}>{info}</p>
            )
          }
        }
        return (
          <p key={oneIndex} data-index={oneIndex} onClick={this.highlightChanger}>{info}</p>
        )
      });
      bodyList.push((<div className="information" key="body-info">{infoNodes}</div>));
    }
    if (this.props.data.sources && this.props.data.sources.length) {
      var sourceNodes = this.props.data.sources.map((src) => {
        return (
          <li key={src}><a href={src}>{helper.truncateString(src, 10)}</a></li>
        )
      });
      bodyList.push((<h4 key="body-sources-title">Sources</h4>));
      bodyList.push((<ul className="sources" key="body-sources">{sourceNodes}</ul>));
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <div className="header">
          {headerList}
        </div>
        <div className="card-content">
          {bodyList}
        </div>
      </div>
    );
  }
}
