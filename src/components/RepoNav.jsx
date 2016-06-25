export default class RepoNav extends React.Component {
  closeNav() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.remove('open');
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="tab-info" onClick={this.closeNav}><ReactRouter.Link to="/info">Information</ReactRouter.Link></li>
          <li className="tab-categories" onClick={this.closeNav}><ReactRouter.Link to="/categories">Categories</ReactRouter.Link></li>
          <li className="tab-elements" onClick={this.closeNav}><ReactRouter.Link to="/elements">Elements</ReactRouter.Link></li>
          <li className="tab-links" onClick={this.closeNav}><ReactRouter.Link to="/links">Links</ReactRouter.Link></li>
        </ul>
      </nav>
    );
  }
}
