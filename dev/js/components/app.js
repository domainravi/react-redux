import React from 'react';
require('../../scss/style.scss');
import EventContainer from '../containers/EventsContainer';
import EventDetails from '../containers/EventDetailsContainer';

const app = () => (
  <div>
    <h2>Event Name: </h2>
    <EventContainer />
    <hr/>
      <h2>Event Details: </h2>
    <EventDetails />
  </div>
);

export default app;