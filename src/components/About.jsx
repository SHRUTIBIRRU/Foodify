import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About</h1>
        <h2>This is about us page</h2>
        <UserClass />
      </>
    );
  }
}

export default About;
