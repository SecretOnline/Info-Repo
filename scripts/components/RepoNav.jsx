window.repo = window.repo || {};
window.repo.RepoNav = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <li class="tab-search"><span>Search</span></li>
          <li class="tab-info"><a href=".">Information</a></li>
          <li class="tab-cat"><a href="cat">Categories</a></li>
          <li class="tab-elements"><span>Elements</span></li>
          <li class="tab-links"><span>Links</span></li>
          <li class="tab-recent"><span>Recent Changes</span></li>
        </ul>
      </nav>
    );
  }
});
