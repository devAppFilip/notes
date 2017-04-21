import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import { NoteListItem } from './NoteListItem';

if(Meteor.isClient){

  describe('NoteListItem', function() {

    it('should show title in h5', function() {
      const noteOne = {
        _id: 'testNoteId1',
        title: 'My Title',
        body: 'My body for note',
        updatedAt: 1492803620932,
        userId: 'testUserId1'
      };

      const wrapper = mount(<NoteListItem note={noteOne}/>);
      const h5Text = wrapper.find('h5').text();
      const timestamp = wrapper.find('p').text();

      expect(h5Text).toBe(noteOne.title);
      expect(timestamp).toBe('21/4/17');
    });

    it('should show default title if no title set', function() {
      const updatedAt = 1492803620932;
      const wrapper = mount(<NoteListItem note={{title: '', updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

  });
}
