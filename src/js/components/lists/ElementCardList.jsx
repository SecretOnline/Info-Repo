import ElementCard from '../components/ElementCard.jsx';
import helper from '../helper.jsx';

export default class ElementCardList extends React.Component {
  static get defaultProps() {
    return {
      elements: [],
      click: null
    };
  }

  render() {
    var cardNodes = this.props.elements.map((element) => {
      return (
        <ElementCard data={element} key={element.title} link={this.props.link} />
      );
    });

    return (
      <div className="card-list element-card-list">
        {cardNodes}
      </div>
    );
  }
}
