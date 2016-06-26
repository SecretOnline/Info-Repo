export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text || ''
    };

    this.checkEnter = this.checkEnter.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  static get defaultProps() {
    return {
      callback: null
    };
  }

  checkEnter(event) {
    if (event.key === 'Enter') {
      this.submitSearch();
    }
  }

  inputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  submitSearch() {
    if (this.props.callback) {
      this.props.callback(this.state.text)
    }
  }

  render() {
    return (
      <div className="search-area">
        <input type="search" placeholder="Search the Repository" className="info-search-box" value={this.state.text} onChange={this.inputChange} onKeyUp={this.checkEnter} autoFocus />
        <input type="button" value="Search" className="info-search-button" onClick={this.submitSearch} />
      </div>
    );

  }
}
