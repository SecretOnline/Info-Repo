import helper from '../helper';

export default class CategoryCard extends React.Component {
  static get defaultProps() {
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
      `cat-${this.props.data.class}`
    ];

    var cl = this.props.data.class;
    var url = `${this.props.link}/${encodeURIComponent(helper.modTitle(this.props.data.title))}`;

    var headerList = [
      <h3 className="card-title" key="header-title">{this.props.data.title}</h3>,
      <ul className="categories" key="header-categories">
        <li data-id={cl} key={cl}><span /></li>
      </ul>
    ];

    if (this.props.data.img) {
      var bgstyle = {
        backgroundImage: `url(${this.props.data.img})`
      };
      headerList.push(<div className="bgimg" style={bgstyle} key="bgimg"></div>);
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={url}>
          <div className="header">
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );
  }
}
