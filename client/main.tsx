// METEOR FRONTEND

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/components/App';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  // console.log('DOM IS READY')
  Tracker.autorun(() => {
    // console.log('AUTORUN CALLED')
    const userReady:boolean = Meteor.subscribe("users.all").ready();
    if(userReady){
      // console.log('USER READY')
      render(<App />, document.getElementById('react-target'));
    } else {
      // console.log('USER NOT READY')
    }
  })
});
