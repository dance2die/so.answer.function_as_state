import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: e => {
        e.preventDefault();
        console.log("this.state.handleChange");
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    console.log("this.handleChange");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.handleChange}>this.handleChange</button>
        <button onClick={this.state.handleChange}>
          this.state.handleChange
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
