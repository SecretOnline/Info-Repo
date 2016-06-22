window.repo = window.repo || {};
window.repo.RepoNav = React.createClass({
  closeNav: function() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.remove('open');
    }
  },
  render: function() {
    return (
      <nav>
        <ul>
          <li className="tab-info" onClick={this.closeNav}><ReactRouter.Link to="/info">Information</ReactRouter.Link></li>
          <li className="tab-info" onClick={this.closeNav}><ReactRouter.Link to="/categories">Categories</ReactRouter.Link></li>
          <li className="tab-info" onClick={this.closeNav}><ReactRouter.Link to="/elements">Elements</ReactRouter.Link></li>
          <li className="tab-info" onClick={this.closeNav}><ReactRouter.Link to="/links">Links</ReactRouter.Link></li>
        </ul>
      </nav>
    );
  }
});
