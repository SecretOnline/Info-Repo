export default class RepoHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    if (window.localStorage) {
      if (window.localStorage.getItem('old-viewed')) {
        this.state.visible = false;
      }
    }

    this.close = this.close.bind(this);
  }

  close() {
    this.setState({visible:false});
    if (window.localStorage) {
      window.localStorage.setItem('old-viewed', true);
    }
  }

  render() {
    if (!this.state.visible) {
      return <div />;
    }

    return (
      <div className="modal-container">
        <div className="modal">
          <h2>The Information Repository is out of date</h2>
          <p>All of the information and sources in the Repository are from before the release of No Man's Sky.</p>
          <p>Initially, this allowed for comparison of the features that were talked about before release and those actually in the game.</p>
          <p>It has been a few months since then, and I haven't been able to find and justify the time to go through the entire repository and redo all of the information. I didn't even get around to making a dialogue such as this one. Things happened IRL for me that were far more important than a game, so this project was put to the side.</p>
          <p>The Repository will still be available for the near future. It will continue to be ad free and open source. A big thank you to everyone who has helped me with this project over its lifetime, and another thank you to those who have used it. This has been a great project for me to learn new things, all while helping out a community I loved.</p>
          <p>That's it from me for now. If you want to keep browsing the Repository, just click the button below.</p>
          <input type="button" className="" onClick={this.close} value="Continue to the Repository" />
        </div>
      </div>
    );
  }
}
