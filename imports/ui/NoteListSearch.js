import React from 'react';

export default class NoteListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearchChange(e) {
    const search = e.target.value;
    this.setState({search});
    Session.set('search', search);
  }

  render() {
    return(
      <div className="item-list__search">
        <input type="text" placeholder="Search notes..." value={this.state.search} onChange={this.onSearchChange.bind(this)}/>
        <p>{this.state.search}</p>
      </div>
    );
  };
}
