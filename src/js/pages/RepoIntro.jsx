export default class RepoIntro extends React.Component {
  render() {
    return (
      <div className="article">
        <h1>An Introduction to <em>No Man's Sky</em></h1>
        <div>
          <img className="highlight" src="https://static.nmsdb.info/img/screenshot/blue-space.png" alt="Space combat in No Man's Sky" title="Space combat in No Man's Sky" />
        </div>
        <p>
          A common complaint about the previous versions of the Information Repository was that it didn't give a good idea of what the game was. It assumes you know what the game is, and answers more specific questions about the game, but doesn't start at the beginning. This page is intended for those who have no/little idea what <em>No Man's Sky</em> is, and need a brief overview.
        </p>
        <h2>What is <em>No Man's Sky</em>?</h2>
        <p>
          <em>No Man's Sky</em> is a SciFi space adventure-exploration game, that heavily features the use of <a href="https://en.wikipedia.org/wiki/Procedural_generation">Procedural Generation</a>. This means that the developers, <a href="http://www.hellogames.org/">Hello Games</a>, have set rules for a universe and the game uses those rules to generate the world. The great benefit of this is that it can generate large numbers of objects; the game has <ReactRouter.Link to="/info/Number_of_Planets#1">over 18 <em>quintillion</em></ReactRouter.Link> planets, every one of them different from the next.
        </p>
        <div>
          <iframe className="highlight" src="https://www.youtube.com/embed/7AVmI73va4g" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>
          Planets might have <ReactRouter.Link to="/elements">valuable resources</ReactRouter.Link> on them or, if you're lucky, you might discover new <ReactRouter.Link to="/info/Amount_of_Life">alien species</ReactRouter.Link>. You can upload your discoveries at special beacons, for which you'll earn Units, the game's currency. Exploring isn't all there is, though. You can trade resources with <ReactRouter.Link to="/info/Space_Stations">space stations</ReactRouter.Link>, building up a fair sum of Units. You can completely ignore Star Trek's Prime Directive and attack anything on sight, but be warned as you will attract the attention of <ReactRouter.Link to="/info/Sentinels">the Sentinels</ReactRouter.Link>, whose job is to keep the peace on planets.
        </p>
        <h2>Gameplay Trailers</h2>
        <p>
          The trailers for <em>No Man's Sky</em> are not just "Pre-rendered" or "Game Engine" footage, like many game studios put out. They're actual gameplay. They can all be found at the top of the <ReactRouter.Link to="/links">Links page</ReactRouter.Link> of this repository, underneath the official Hello Games links, in order of them being released. These range from the Announcement Trailer in 2013 to the "I've Seen Things" trailer released in October 2015.
        </p>
        <div>
          <img className="highlight" src="https://static.nmsdb.info/img/screenshot/diplo.png" alt="The Daplokarus, seen in the 2014 E3 Gameplay" title="The Daplokarus, seen in the 2014 E3 Gameplay" />
        </div>
        <h2>Procedual Generation; what is it?</h2>
        <p>
          <a href="https://twitter.com/NoMansSky">Sean Murray</a>, lead programmer and figurehead for the game, <a href="https://twitter.com/innesmck">Innes McKendrick</a>, another programmer, <a href="https://twitter.com/GrantDuncan">Grant Duncan</a>, art director, and <a href="https://twitter.com/earcom">Paul Weir</a>, sound designer, have done talks about the use of Procedural Generation in the game.
        </p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=xJRXNesI9f4">Generating Interesting Content</a> - Innes McKendrick - November 2014 - PROCJAM</li>
          <li><a href="https://www.youtube.com/watch?v=h-kifCYToAU">A Behing-the-Scenes Tour of <em>No Man's Sky</em></a> - Sean Murray - December 2014 - GameInformer</li>
          <li><a href="https://www.youtube.com/watch?v=vcEA41eBOGs">How I Learned to Love Procedural Art</a> - Grant Duncan - July 2015 - GDC</li>
          <li><a href="https://archives.nucl.ai/recording/building-a-galaxy-procedural-generation-in-no-mans-sky/">Building a Galaxy</a> - Innes McKendrick - July 2015 - nucl.ai</li>
          <li><a href="https://www.youtube.com/watch?v=nUWFTLhZ1ro">The Use of Generative Sound</a> - Paul Weir - June 2016 - Sonar+D</li>
        </ul>
      </div>
    );
  }
}
