import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  handleInputChange = (input) => {
    this.setState({ newTech: input.target.value });
  };

  handleSubmit = (submit) => {
    submit.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
