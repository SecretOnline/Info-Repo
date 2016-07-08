import ElementCardList from '../components/ElementCardList.jsx';

export default class ElementPage extends React.Component {
  render() {
    return (
      <div class="page element-page">
        <h2>Elements</h2>
        <ElementCardList elements={this.props.route.elements} link="/elements" />
        <p>
          Want all the elements on one page? Don't worry, I have <ReactRouter.Link to="/elements/all">just the link</ReactRouter.Link> for you.
        </p>
      </div>
    );
  }
}
