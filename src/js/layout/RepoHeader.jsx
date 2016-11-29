export default class RepoHeader extends React.Component {
  toggleNav() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  }

  closeNav() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.remove('open');
    }
  }

  render() {
    return (
      <header>
        <h1 className="title" onClick={this.closeNav}><ReactRouter.Link to="/info">NMS Information Repository</ReactRouter.Link></h1>
        <div className="button-container">
          <button type="button" className="menu" onClick={this.toggleNav}>
            <img src="/res/menu.svg" alt="Navigation" />
          </button>
        </div>
      </header>
    );
  }
}
