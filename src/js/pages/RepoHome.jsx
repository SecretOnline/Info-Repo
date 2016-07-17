export default class RepoHome extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the No Man's Sky Information Repository</h2>
        <p>
          The goal of this site is to provide a single place with all the known information about <a href="http://www.hellogames.org">Hello Games</a>' upcoming title <a href="http://nomanssky.com">No Man's Sky</a>.
        </p>
        <p>
          All information in this repository comes with the sources for that information, so you can go off and read the original articles for more detailed information.
        </p>
        <p>
          The repository was not designed to hold information about the discoveries that people make in the game. There are other websites (such as <a href="https://nmsorigins.com/">NMS Origins</a>) that are designed for that purpose.
        </p>
        <div className="card-list">
          <div className="card cat-planets">
            <ReactRouter.Link to="/info">
              <div className="header">
                <h3 className="card-title">Information</h3>
              </div>
            </ReactRouter.Link>
          </div>
          <div className="card cat-stars">
            <ReactRouter.Link to="/categories">
              <div className="header">
                <h3 className="card-title">Categories</h3>
              </div>
            </ReactRouter.Link>
          </div>
          <div className="card cat-life">
            <ReactRouter.Link to="/search">
              <div className="header">
                <h3 className="card-title">Search</h3>
              </div>
            </ReactRouter.Link>
          </div>
          <div className="card cat-news">
            <ReactRouter.Link to="/elements">
              <div className="header">
                <h3 className="card-title">Elements</h3>
              </div>
            </ReactRouter.Link>
          </div>
          <div className="card cat-meta">
            <ReactRouter.Link to="/links">
              <div className="header">
                <h3 className="card-title">Interviews/Videos/Links</h3>
              </div>
            </ReactRouter.Link>
          </div>
          <div className="card">
            <a href="https://www.nmsorigins.com/" target="_blank">
              <div className="header" style={{backgroundColor: '#dd4b41'}}>
                <h3 className="card-title">NMS Origins</h3>
                <img src={`/res/external.svg`} alt="Open in new tab/window" className="external" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
