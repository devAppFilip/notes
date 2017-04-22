import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import { NoteListItem } from './NoteListItem';
import { notes } from '../fixtures/fixtures';

if(Meteor.isClient){

  describe('NoteListItem', function() {
    let Session;

    beforeEach(() => {
      Session = {
        set: expect.createSpy()
      };
    });

    it('should show title in h5', function() {

      const wrapper = mount(<NoteListItem note={notes[0]} Session={Session}/>);
      const h5Text = wrapper.find('h5').text();
      const timestamp = wrapper.find('p').text();

      expect(h5Text).toBe(notes[0].title);
      expect(timestamp).toBe('21/4/17');

    });

    it('should show default title if no title set', function() {
      const updatedAt = 1492803620932;
      const wrapper = mount(<NoteListItem note={notes[1]} Session={Session}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

    it('should call set on click', function() {
      const wrapper = mount(<NoteListItem note={notes[1]} Session={Session}/>);
      wrapper.find('div').simulate('click');

      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[1]._id);
    });

  });
}
