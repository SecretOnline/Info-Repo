window.repo = window.repo || {};
window.repo.RepoNav = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <li className="tab-search"><span>Search</span></li>
          <li className="tab-info"><ReactRouter.Link to="/info">Information</ReactRouter.Link></li>
          <li className="tab-info"><ReactRouter.Link to="/categories">Categroies</ReactRouter.Link></li>
          <li className="tab-info"><ReactRouter.Link to="/elements">Elements</ReactRouter.Link></li>
          <li className="tab-info"><ReactRouter.Link to="/links">Links</ReactRouter.Link></li>
        </ul>
      </nav>
    );
  }
});
