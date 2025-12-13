import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "User",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SHRUTIBIRRU");
    const json = await data.json();
    this.setState({ userData: json });
  }
  render() {
    const { name, bio } = this.state.userData;
    return (
      <div>
        <h1 className="font-semibold">Name: John Doe</h1>
      </div>
    );
  }
}

export default UserClass;
