window.repo = window.repo || {};
window.repo.RepoHeader = React.createClass({
  render: function() {
    return (
      <header>
        <h1 className="title">NMS Information Repository</h1>
        <div className="button-container">
          <button type="button" className="menu">
            <img src="res/menu.svg" alt="Navigation" />
          </button>
        </div>
      </header>
    );
  }
});
