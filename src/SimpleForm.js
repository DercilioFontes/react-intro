import React from 'react';
import Greetings from './Greetings';

class SimpleForm extends React.Component {
  state = {
    firstName: "",
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    return (
      <div>
        <input type="text" name="firstName" onChange={this.onFirstNameChange} />
        <br /> <br /> 
        <Greetings firstName={this.state.firstName} />
      </div>
    );
  }
}

export default SimpleForm;