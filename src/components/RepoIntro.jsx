export default class RepoIntro extends React.Component {
  render() {
    return (
      <div>
        <h2>An Introduction to No Man's Sky</h2>
        <p>
          A common complaint about the previous versions of the Information Repository was that it didn't give a good idea of what the game was. It assumes you know what the game is, and answers more specific questions about the game, but doesn't start at the beginning. This page is intended for those who have no/little idea what No Man's Sky is, and need a brief overview.
        </p>
        <h3>What is it?</h3>
        <p>
          No Man's Sky is a SciFi space adventure-exploration game, that heavily features the use of <a href="https://en.wikipedia.org/wiki/Procedural_generation">Procedural Generation</a>. This means that the developers, <a href="http://www.hellogames.org/">Hello Games</a>, have set rules for a universe and the game uses those rules to generate the world. The great benefit of this is that it can generate large numbers of objects; the game has <ReactRouter.Link to="/info/Number_of_Planets#1">over 18 <em>quintillion</em></ReactRouter.Link> planets, every one of them different from the next.
        </p>
        <p>
          Planets might have <ReactRouter.Link to="/elements">valuable resources</ReactRouter.Link> on them or, if you're lucky, you might discover new <ReactRouter.Link to="/info/Amount_of_Life">alien species</ReactRouter.Link>. You can upload your discoveries at special beacons, for which you'll earn Units, the game's currency. Exploring isn't all there is, though. You can trade resources with <ReactRouter.Link to="/info/Space_Stations">space stations</ReactRouter.Link>, building up a fair sum of Units. You can completely ignore Star Trek's Prime Directive and attack anything on sight, but be warned as you will attract the attention of <ReactRouter.Link to="/info/Sentinels">the Sentinels</ReactRouter.Link>, whose job is to keep the peace on planets.
        </p>
      </div>
    );
  }
}
