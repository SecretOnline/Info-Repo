export default class OriginsCard extends React.Component {
  static get defaultProps() {
    return {
      data: {
        _id: '0',
        name: 'Unknown Discovery',
        score: 0,
        type: 'Unknown',
        _images: []
      }
    };
  }

  render() {
    var data = this.props.data;
    // Create the main
    var classes = [
      'card',
      'origins-card'
    ];

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{data.name}</h3>)
    ];

    if (data._images && data._images.length) {
      var bgstyle = {
        backgroundImage: `url(${data._images[0].fileurl.thumb})`
      };
      headerList.push(<div className="bgimg" style={bgstyle} key="bgimg"></div>);
    }

    return (
      <div className={classes.join(' ')} id={helper.modTitle(data.title)}>
        <ReactRouter.Link to={`https://nmsorigins.com/discovery/${data._id}`}>
          <div className="header" onClick={helper.scrollToTop}>
            {headerList}
          </div>
        </ReactRouter.Link>
      </div>
    );

  }
}
