/**
 * Created by s.ravikumar on 05/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import st from '../utils/SafeTraverse';

class EventDetailsContainer extends Component {
  render () {

    if(!this.props.event) {
      return (
        <p>Select an event</p>
      );
    }
    const meeting = this.props.event;
    const attendees = st(meeting, ['attendees']).map((attendee, key) => <span key={key}>{attendee}</span> );

    return (
      <div>
        <p><strong>Subject:</strong> {st(meeting, ['subject']) || 'NA'}</p>
        <p><strong>Body:</strong> {st(meeting, ['body']) || 'NA'}</p>
        <p><strong>Attendees:</strong> {attendees}</p>
        <p><strong>Time:</strong> {st(meeting, ['start']) || 'NA'} to {st(meeting, ['end']) || 'NA'}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.activeEvent
  }
}

export default connect(mapStateToProps)(EventDetailsContainer);