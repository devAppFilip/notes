import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import NoteListSearch from './NoteListSearch';

export const NoteList = (props) => {
  return (
    <div className="item-list">
      <NoteListHeader/>
      <NoteListSearch/>
      {props.notes.length ? props.notes.map((note) => {
        return (
          <NoteListItem note={note} key={note._id}/>
        );
      }) : <NoteListEmptyItem/>}
    </div>
  );
};

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  Meteor.subscribe('notes');

  return {
    notes: Notes.find({
      title: {
        $regex: `.*${Session.get('search')}.*`,
        $options: 'i'
      }
    }, {
      sort: {
        updatedAt: -1
      }
    }).fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId
      };
    })
  };
}, NoteList);
