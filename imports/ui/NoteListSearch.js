import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export class NoteListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearchChange(e) {
    const search = e.target.value;
    this.setState({search});
    this.props.Session.set('search', search);
  }

  render() {
    return(
      <div className="item-list__search">
        <input type="text" placeholder="Search notes..." value={this.state.search} onChange={this.onSearchChange.bind(this)}/>
      </div>
    );
  };
}

NoteListSearch.propTypes = {
  Session: React.PropTypes.object.isRequired
}

export default createContainer(() => {
  return {
    Session: Session
  }
}, NoteListSearch);
