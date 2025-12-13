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
      <div className="w-2/12 mx-auto">
        <h1 className="text-2xl">About</h1>
        <h2>This is about us page</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
