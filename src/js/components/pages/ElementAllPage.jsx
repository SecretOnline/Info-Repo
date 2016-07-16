import ElementSpotlight from '../components/ElementSpotlight.jsx';

export default class ElementAllPage extends React.Component {
  render() {
    var spotlights = this.props.route.elements.sort((a, b) => {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }).map((info) => {
      return (
        <ElementSpotlight data={info} key={info.title} />
      );
    });


    return (
      <div class="page info-page">
        <h2>Elements - All Elements</h2>
        <p>
          This page lists all of the elements in the Repository on a single page. For better linking and referencing, use the <ReactRouter.Link to="/elements">standard elements list</ReactRouter.Link>.
        </p>
        <div>
          {spotlights}
        </div>
      </div>
    );
  }
}
