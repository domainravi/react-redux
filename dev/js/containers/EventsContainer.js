import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { selectEvent } from '../actions/eventActions';
import searchedByInput from '../utils/searchByInput';

class EventsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {searchData: '', eventList: this.props.events};
  }

  onInputChange (e) {
    this.setState({ searchData: e.target.value });
    const inputValue = e.target.value.toUpperCase();
    this.setState({ eventList: searchedByInput(inputValue, this.props.events, 'company')})
  };

  render() {
    return (
      <div>
          <input
            type='text'
            placeholder='Search by account'
            name='searchData'
            value={this.state.searchData}
            onChange={this.onInputChange.bind(this)}
          />
        {this.state.eventList.map(event => {
          return (
            <li
              onClick={() => this.props.selectEvent(event)}
              key={event.id}>
              {event.text} with {event.company} on {event.date} Jan 2017.
            </li>
          );
        })}
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectEvent: selectEvent}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsContainer);