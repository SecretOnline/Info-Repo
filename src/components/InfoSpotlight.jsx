import helper from '../helper.jsx';

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
      click: null
    };
  }

  render() {
    var self = this;
    // Create the main
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
      classes.push('cat-' + this.props.data.categories[0].class);
      var categoryNodes = this.props.data.categories.map(function(cat) {
        return (<li data-id={cat.class} key={cat.class}><ReactRouter.Link to={'/categories/' + helper.modTitle(cat.title)}>{cat.title}</ReactRouter.Link></li>)
      });
      headerList.push((<ul className="categories" key="header-categories">{categoryNodes}</ul>));
    }
    // Set card content stuff
    var bodyList = [];
    if (this.props.data.text && this.props.data.text.length) {
      var infoNodes = this.props.data.text.map(function(info, index) {
        return (
          <p key={index}>{info}</p>
        )
      });
      bodyList.push((<div className="information" key="body-info">{infoNodes}</div>));
    }
    if (this.props.data.sources && this.props.data.sources.length) {
      var sourceNodes = this.props.data.sources.map(function(src) {
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
