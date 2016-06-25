export default class SearchBox extends React.Component {
  static get defaultProps() {
    return {
      callback: null
    };
  }

  get state() {
    return {
      text: ''
    };
  }

  inputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  submitSearch() {
    if (this.props.callback) {
      callback(this.state.text)
    }
  }

  render() {
    return (
      <div className="search-area">
        <input type="search" placeholder="Search the Repository" className="info-search-box" value={this.state.text} autoFocus />
        <input type="button" value="Search" className="info-search-button" />
      </div>
    );

  }
}
