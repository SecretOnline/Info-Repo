window.repo = window.repo || {};
window.repo.RepoNav = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <li className="tab-search"><span>Search</span></li>
          <li className="tab-info"><a href=".">Information</a></li>
          <li className="tab-cat"><a href="cat">Categories</a></li>
          <li className="tab-elements"><span>Elements</span></li>
          <li className="tab-links"><span>Links</span></li>
          <li className="tab-recent"><span>Recent Changes</span></li>
        </ul>
      </nav>
    );
  }
});
