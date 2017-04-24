import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import { NoteListSearch } from './NoteListSearch';

if(Meteor.isClient) {
  describe('NoteListSearch', function() {
    let Session;

    beforeEach(() => {
      Session = {
        set: expect.createSpy()
      };
    });

    it('should call set session with search value', function() {
      const searchVal = 'abc';
      const wrapper = mount(<NoteListSearch Session={Session}/>);
      wrapper.find('input').simulate('change', {
        target: {
          value: searchVal
        }
      });

      expect(Session.set).toHaveBeenCalledWith('search', searchVal);
    });

  });
}
