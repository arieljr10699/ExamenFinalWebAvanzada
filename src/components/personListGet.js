import React from 'react';
import API from '../apiBase/api';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
   
  componentDidMount() {
    API.get(`users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        //console.log(res.data);
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}