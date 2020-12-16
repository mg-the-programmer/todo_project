import { render } from "@testing-library/react";
import React from "react";

export default class Random extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>
            <img className="dp" src="https://bit.ly/3oXjghp" />
          </div>
        ) : (
          <div>
            <img className="dp" src={this.state.person.picture.medium} />
          </div>
        )}
      </div>
    );
  }
}
