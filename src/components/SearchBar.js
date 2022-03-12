import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  handleFormSubmit = e => {
    e.preventDefault();

    // callback the parent component to get the search term when the form is submitted
    this.props.getTerm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Search Videos</label>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              id="video-search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
