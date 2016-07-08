export default class RepoAbout extends React.Component {
  render() {
    return (
      <div>
        <h2>About this Repository</h2>
        <h3>Creation</h3>
        <p>
          The Information Repository started as an idea around early October 2015. On the 26<sup>th</sup> of October, <a href="https://github.com/SecretOnline/NMS-Info/commit/73ecae140a3d0e44268e345c65127901bea7d4af">work began</a>.
        </p>
        <p>
          The starting goal for the repository was to be a place that could answer the most common questions asked on the <a href="https://reddit.com/r/NoMansSkyTheGame">No Man's Sky Subreddit</a>. As development started, it became clear that this had potential to be much bigger than just the most common questions, but could hold all the information available on the game at that time.
        </p>
        <p>
          The Information Repository wasn't going to just hold information about the game, but also would allow player to catalogue their discoveries. However, this ended up being too large of a scope for a one-man project. The NMS Origins team has built such a website, and offered to have the Information Repository join with their database. Such offer was declined to keep the repository independently run.
        </p>
        <p>
          In its current state, the Information Repository holds information about the game, as well as any information available on the elements and resources that can be collected/mined in the game.
        </p>
        <h3>Extra Information</h3>
        <p>
          The <a href="https://github.com/SecretOnline/Info-Repo">source code</a> for the Information Repository is available, as well as for the <a href="https://github.com/SecretOnline/NMS-Info">old version</a>.
        </p>
        <p>
          Even though the creator, secret_online, is a moderator of <a href="https://reddit.com/r/NoMansSkyTheGame">/r/NoMansSkyTheGame</a>, the Information Repository is run independently from it.
        </p>
        <h3>Contact</h3>
        <p>
          If you've found a problem in the Repository (incorrect info/bug), please <ReactRouter.Link to="/problem?">go here</ReactRouter.Link>.
        </p>
        <p>
          For other reasons, contact secret_online on <a href="https://twitter.com/secret_online">Twitter</a>, <a href="https://www.reddit.com/message/compose/?to=secret_online">Reddit</a>, or by <a href="mailto://me+repo@secretonline.co">email</a>.
        </p>
      </div>
    );
  }
}
