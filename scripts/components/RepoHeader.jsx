window.repo = window.repo || {};
window.repo.RepoHeader = React.createClass({
  render: function() {
    return (
      <header>
        <h1 class="title">NMS Information Repository</h1>
        <div class="button-container">
          <button type="button" class="menu">
            <img src="res/menu.svg" alt="Navigation" />
          </button>
        </div>
      </header>
    );
  }
});
