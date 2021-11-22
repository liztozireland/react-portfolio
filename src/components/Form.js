import React from "react";

export default class Form extends React.Component {
  state = {
    emailAddress: "",
    workQuestion: "",
  };

  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <form>
        <input
          placeholder="Email Address"
          value={this.state.emailAddress}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="Type Inquiry Here"
          value={this.state.workQuestion}
          onChange={(e) => this.setState({ workQuestion: e.target.value })}
        />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
