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

    return (
      <div className={classes.join(' ')} id={helper.modTitle(this.props.data.title)}>
        <ReactRouter.Link to={`${this.props.link}/${encodeURIComponent(helper.modTitle(this.props.data.title))}`}>
          <div className="header">
            <h3 className="card-title" key="header-title">{this.props.data.title}</h3>
          </div>
        </ReactRouter.Link>
      </div>
    );
  }
}
