export default class RepoAbout extends React.Component {
  render() {
    return (
      <div>
        <h1>About this Repository</h1>
        <h2>Creation</h2>
        <p>
          The Information Repository started as an idea around early October 2015. On the 26<sup>th</sup> of October, <a href="https://github.com/SecretOnline/NMS-Info/commit/73ecae140a3d0e44268e345c65127901bea7d4af">work began</a>.
        </p>
        <p>
          The starting goal for the repository was to be a place that could answer the most common questions asked on the <a href="https://reddit.com/r/NoMansSkyTheGame">No Man's Sky Subreddit</a>.
        </p>
        <p>
          At that time, the best sources for information were the FAQ and Archive on the subreddit. While the content on those pages was great, there was one problem with it, but it wasn't the fault of those who had written it. Instead the problem lay with reddit's wiki format, and linking. A new user would find the big page of information a bit daunting, and wouldn't know whewre to start looking. Meanwhile, a user who did know wouldn't be able to link directly to a peice of information. The best they could do was a link to the top of a section, which often took up more than a screen's worth of space.
        </p>
        <p>
          The Repository needed to hold all the information in the other resources, but also make it easier to link to a specific bit of information. This goal was at the core of the project, the first working version of it happening on the <a href="https://github.com/SecretOnline/NMS-Info/commit/1a8cd296d68190d335e80461de4726f9d4cde19c#diff-ba340757d114ee0b019a8c2c245833faR89">third day</a> of development. Later additions allowed for the <a href="https://github.com/SecretOnline/NMS-Info/commit/f382dcf9619709b8a21d14ca6f0759ff767b07a7">highlighting</a> of individual pieces of information, making it even easier to share it.
        </p>
        <p>
          The Information Repository wasn't going to just hold information about the game, but also would allow player to catalogue their discoveries. However, this ended up being too large of a scope for a one-man project. The NMS Origins team has built such a website, and offered to have the Information Repository join with their database. That offer was declined to keep the repository independently run.
        </p>
        <p>
          In its current state, the Information Repository holds information about the game, as well as any information available on the elements and resources that can be collected/mined in the game. All information has been summarised and rewritten, no copy/pasting from articles, to make it easier to understand and more concise.
        </p>
        <h2>Extra Information</h2>
        <p>
          The <a href="https://github.com/SecretOnline/Info-Repo">source code</a> for the Information Repository is available, as well as for the <a href="https://github.com/SecretOnline/NMS-Info">old version</a>.
        </p>
        <p>
          Even though the creator, secret_online, is a moderator of <a href="https://reddit.com/r/NoMansSkyTheGame">/r/NoMansSkyTheGame</a>, the Information Repository is run independently from it.
        </p>
        <h2>Contact</h2>
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
