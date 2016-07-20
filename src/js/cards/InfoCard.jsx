import helper from '../helper';

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

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{this.props.data.title}</h3>)
    ];
    if (this.props.data.categories && this.props.data.categories.length) {
      classes.push(`cat-${this.props.data.categories[0].class}`);
      var categoryNodes = this.props.data.categories.map((cat) => {
        return (<li data-id={cat.class} key={cat.class}><span /></li>)
      });
      headerList.push((<ul className="categories" key="header-categories">{categoryNodes}</ul>));
    }
    if (this.props.data.img) {
      var bgstyle = {
        backgroundImage: `url(${this.props.data.img})`
      };
      headerList.push(<div className="bgimg" style={bgstyle} key="bgimg"></div>);
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={`${this.props.link}/${encodeURIComponent(helper.modTitle(this.props.data.title))}`}>
          <div className="header" onClick={helper.scrollToTop}>
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );

  }
}
